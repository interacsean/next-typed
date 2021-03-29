import { RequestOf } from "./RequestOf";

export type TransformFn<T, U> = (req: RequestOf<T>) => U;
