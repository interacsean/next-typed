import { Errable } from "errable";
import { AppErr } from "./AppErr";

export type ValidateFn<T> = (dto: T) => Errable<AppErr<any>, T>;
