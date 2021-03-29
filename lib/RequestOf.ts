import { NextApiRequest as Request } from "next";

type RequestVars = {
  params?: {};
  query?: {};
  body?: string | [] | {};
};

export type RequestOf<ReqVars extends RequestVars> = Omit<
  Request,
  "query" | "path"
> & { path: string } & ReqVars;
