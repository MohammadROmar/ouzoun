export type Success<T> = { message: 'success'; data: T };
export type Error = {
  message: 'fetch-error' | 'server-connection';
  data: { status: number };
};

export type Fetch<T> = Success<T> | Error;
