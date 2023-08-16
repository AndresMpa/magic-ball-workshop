export const proxyGenerator = (actions, handler) => {
  return new Proxy(actions, handler);
};
