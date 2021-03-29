export type ApiResponse<T, E> = {
  success: true,
  message: string,
  data: T
} | {
  success: false,
  message: string,
  data: E
};
