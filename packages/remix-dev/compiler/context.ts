import type { RemixConfig } from "../config";
import type { Options } from "./options";

export type Context = {
  config: RemixConfig;
  options: Options;
};
