declare module "@webref/css" {
  interface Data {
    properties: Record<string, unknown>;
  }
  function listAll(): Promise<Record<string, Data>>;
}
