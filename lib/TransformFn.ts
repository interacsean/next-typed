import { Errable } from "errable";
import { AppErr } from "./AppErr";
import { RequestOf } from "./RequestOf";

export type TransformFn<T, U> = (req: RequestOf<T>) => Errable<AppErr<any>, U>;
