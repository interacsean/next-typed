import { ifNotErr } from "errable";

import withParseBody from "../../../lib/withParseBody";
import { Route } from "../../../lib/Route";
import { ReqVars, ReturnType } from "./types";
import transform from "./transform";
import validate from "./validate";
import usecase from "./usecase";

const route: Route<ReqVars, ReturnType> = (req, res) => {
  return Promise.resolve(req)
    .then(transform)
    .then(ifNotErr(validate))
    .then(ifNotErr(usecase))
    .then(...responderWithCatch(res));
  if (req.method !== "post") {
  }
  res.send("ok");
};

export default withParseBody(route);
