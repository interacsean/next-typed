import { Err, Errable } from "errable";

export type AppErrObj<T> = {
  statusCode?: number;
  message?: string;
  data: T;
};

export type AppErr<T> = Err<AppErrObj<T>>;

export type AppErrable<E, T> = Errable<AppErrObj<E>, T>;

export function createAppErr<T>(
  data: T,
  message?: string,
  statusCode?: number
) {
  return new Err("App Error", {
    data,
    ...(message ? { message } : {}),
    ...(statusCode ? { statusCode } : {})
  });
}
