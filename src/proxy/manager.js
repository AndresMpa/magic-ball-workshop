import { proxyGenerator } from "./generator.js";
import voiceHandler from "./handler/voice.js";

const managerConstructor = (actions) => {
  const proxy = proxyGenerator(actions, voiceHandler);

  const proxyManager = (event) => {
    proxy.value = event.target.value;
  };

  return proxyManager;
};

export default managerConstructor;