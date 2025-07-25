//@scripts/genMod.ts

//deno run --allow-read --allow-write scripts/genMod.ts


const outputFile = "mod.ts";

const exportFromDir = async (dir: string): Promise<string[]> => {
  const exports: string[] = [];
  for await (const entry of Deno.readDir(dir)) {
    if (entry.isFile && entry.name.endsWith(".ts")) {
      exports.push(`export * from "./${dir}/${entry.name}";`);
    }
  }
  return exports;
};

const main = async () => {
  const modelExports = await exportFromDir("models");
  const mapperExports = await exportFromDir("mappers");

  const allExports = [...modelExports, "", ...mapperExports];
  await Deno.writeTextFile(outputFile, allExports.join("\n"));
  console.log(`✅ ${outputFile} generated with ${modelExports.length} models and ${mapperExports.length} mappers.`);
};

await main();
