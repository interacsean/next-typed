import { Err } from "errable";

export type AppErr<T> = Err<{
  statusCode?: number;
  data: T;
}>;

export function createAppErr<T>(data: T, statusCode?: number) {
  return new Err("App Error", {
    data,
    ...(statusCode ? { statusCode } : {})
  });
}
