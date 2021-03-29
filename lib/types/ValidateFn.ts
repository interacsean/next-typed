import { AppErrable } from "./AppErr";

export type ValidateFn<T, U, E> = (dto: T) => AppErrable<E, U>;
