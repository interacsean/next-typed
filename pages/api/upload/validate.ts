import { createAppErr } from "../../../lib/types/AppErr";
import { ValidateFn } from "../../../lib/types/ValidateFn";

import { UnvalidatedDto, ValidatedDto, ErrorType } from "./types";

const validate: ValidateFn<UnvalidatedDto, ValidatedDto, ErrorType> = (dto) => {
  // return createAppErr("Sample error validating");
  return {};
};

export default validate;
