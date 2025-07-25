import { walk } from "https://deno.land/std@0.224.0/fs/walk.ts";
import { ensureDir } from "https://deno.land/std@0.224.0/fs/ensure_dir.ts";
import { dirname, join, relative, resolve } from "https://deno.land/std@0.224.0/path/mod.ts";

const SRC_DIR = "src";
const DIST_DIR = "dist";
const MOD_TS_PATH = join(DIST_DIR, "mod.ts");

await Deno.remove(DIST_DIR, { recursive: true }).catch(() => {});
await ensureDir(DIST_DIR);

function rewriteAliases(code: string, filePath: string): string {
  const relTo = (targetDir: string, filePath: string, imported: string) => {
    const fromDir = dirname(filePath);
    const toPath = join(SRC_DIR, targetDir, imported);
    let relPath = relative(fromDir, toPath);
    relPath = relPath.replaceAll("\\", "/");  // Normalize to forward slashes
    return relPath.startsWith(".") ? relPath : `./${relPath}`;
  };

  return code
    .replaceAll(/from\s+["']@models\/([^"']+)["']/g, (_match, subpath) => {
      const resolved = relTo("models", filePath, subpath);
      return `from "${resolved}"`;
    })
    .replaceAll(/from\s+["']@mappers\/([^"']+)["']/g, (_match, subpath) => {
      const resolved = relTo("mappers", filePath, subpath);
      return `from "${resolved}"`;
    });
}

// Collect paths for mod.ts
const exportsForMod: string[] = [];

for await (const entry of walk(SRC_DIR, { exts: [".ts"], includeDirs: false })) {
  const relPathRaw = relative(SRC_DIR, entry.path);
  const relPath = relPathRaw.replaceAll("\\", "/");
  const destPath = join(DIST_DIR, relPathRaw);
  const destDir = dirname(destPath);

  await ensureDir(destDir);

  const code = await Deno.readTextFile(entry.path);
  const rewritten = rewriteAliases(code, entry.path);
  await Deno.writeTextFile(destPath, rewritten);

  // Only export models and mappers
  if (
    relPath.startsWith("models/") ||
    relPath.startsWith("mappers/")
  ) {
    const exportPath = `./${relPath}`;
    exportsForMod.push(`export * from "${exportPath}";`);
  }
}

// Write mod.ts
await Deno.writeTextFile(MOD_TS_PATH, exportsForMod.join("\n") + "\n");

console.log(`✅ Built /dist with rewritten imports and generated mod.ts`);

// --- New cleanup logic here ---

const repoRoot = resolve(".");

for await (const entry of walk(repoRoot, { maxDepth: 1 })) {
  const name = entry.name;
  // Skip dist folder and .git folder
  if (
    name === DIST_DIR || 
    name === ".git"
  ) {
    continue;
  }

  // For root files/folders other than dist and .git, remove them
  const path = join(repoRoot, name);

  try {
    const stat = await Deno.lstat(path);
    if (stat.isDirectory) {
      await Deno.remove(path, { recursive: true });
      console.log(`Deleted folder: ${name}`);
    } else {
      await Deno.remove(path);
      console.log(`Deleted file: ${name}`);
    }
  } catch (error) {
    console.error(`Failed to delete ${name}:`, error);
  }
}

console.log("✅ Cleaned repo except /dist and .git");
