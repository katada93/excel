export const sleep = (value, ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms, value));
