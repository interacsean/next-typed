import { NextApiResponse } from "next";
import { RequestOf } from "./RequestOf";

export type Route<T, U> = (
  req: RequestOf<T>,
  res: NextApiResponse,
  next: Function
) => Promise<U>;
