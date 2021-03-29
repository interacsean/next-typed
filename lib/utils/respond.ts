import { ifValElse } from "errable";
import { NextApiResponse } from "next";
import { AppErrable, AppErrObj } from "../types/AppErr";
import { ApiResponse } from "../types/ApiResponse";

const isDev = process.env.NODE_ENV === 'development';

export function respond<E, T>(
  res: NextApiResponse,
  outcome: AppErrable<E, T>,
  message?: string
): AppErrable<E, T> {
  res.setHeader("Content-type", "application/json");
  return ifValElse(
    (data: T) => {
      const resp: ApiResponse<T, never> = {
        success: true,
        message: message || "SUCCESS",
        data
      };
      res.send(resp);
      return outcome;
    },
    (err: AppErrObj<E>) => {
      if (err.statusCode) {
        res.status(err.statusCode);
      }
      const resp: ApiResponse<never, E> = {
        success: false,
        message: err.message || "ERROR",
        data: err.data
      };
      res.send(resp);
      return outcome;
    },
    outcome
  );
}

export const catchRespond = (res: NextApiResponse, e: unknown) => {
  const resp: ApiResponse<never, unknown> = {
    success: false,
    message: 'Unknown error',
    data: isDev ? e : undefined
  }
  res.send(resp);
  return null;
};

export const createRespondOrCatch = (
  res: NextApiResponse,
  successMsg?: string
) => [
  <E, T>(outcome: AppErrable<E, T>): AppErrable<E, T> =>
    respond<E, T>(res, outcome, successMsg),
  (e: unknown) => catchRespond(res, e)
];

export default createRespondOrCatch;
