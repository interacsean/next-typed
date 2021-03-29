import { Errable } from "errable";
import { AppErr } from "./AppErr";

export type UsecaseFn<T, U> = (dto: T) => Errable<AppErr<any>, U>;
