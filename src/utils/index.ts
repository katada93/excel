export const sleep = <T>(value: T, ms: number = 1000): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, ms, value));
