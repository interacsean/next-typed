import { NextApiResponse } from "next";
import { RequestOf, RequestVars } from './RequestOf';
import { AppErrable } from "./AppErr";

export type Route<T extends RequestVars, U, E> = (
  req: RequestOf<T>,
  res: NextApiResponse,
  next: Function
) => Promise<AppErrable<E, U>>;
