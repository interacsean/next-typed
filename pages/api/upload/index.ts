import { ifNotErr } from "errable";

import withParseBody from "../../../lib/utils/withParseBody";
import { Route } from "../../../lib/types/Route";
import { createRespondOrCatch } from "../../../lib/utils/respond";
import { RequestVars, ReturnType, ErrorType } from "./types";
import transform from "./transform";
import validate from "./validate";
import usecase from "./usecase";

const route: Route<RequestVars, ReturnType, ErrorType> = (req, res) => {
  const respondOrCatch = createRespondOrCatch(res);
  return Promise.resolve(req)
    .then(transform)
    .then(ifNotErr(validate))
    .then(ifNotErr(usecase))
    .then(...respondOrCatch);
};

export default withParseBody(route);
