import { TransformFn } from "../../../lib/types/TransformFn";
import { RequestVars, UnvalidatedDto } from "./types";

const transform: TransformFn<RequestVars, UnvalidatedDto> = (req) => {
  return {};
};

export default transform;
