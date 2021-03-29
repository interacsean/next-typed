import { NextApiRequest as Request } from "next";

export type RequestVars = {
  query?: {
    [key: string]: string | string[];
  };
  cookies?: {
    [key: string]: string;
  };
  body?: any;
};

export type RequestOf<ReqVars extends RequestVars> = Omit<
  Request,
  "query" | "path" | "body" | "cookies"
> & { path: string } & ReqVars;
