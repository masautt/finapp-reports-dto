export type CommonFields = {
  id: IdFormat;
  number: number;
  comments: string | null;
};

export const ID_LENGTH = 6;
type ID_LENGTH = 6
export type IdFormat = `${string & { length: ID_LENGTH }}`;

export const TYPE = {
  STRING: "string",
  NUMBER: "number",
  BOOLEAN: "boolean",
  OBJECT: "object",
  FUNCTION: "function",
  UNDEFINED: "undefined",
  EMPTY : ""
} as const;
