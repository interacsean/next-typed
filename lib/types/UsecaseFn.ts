import { AppErrable } from "./AppErr";

export type UsecaseFn<T, U, E> = (dto: T) => AppErrable<E, U>;
