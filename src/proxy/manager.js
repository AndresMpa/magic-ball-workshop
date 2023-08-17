import { proxyGenerator } from "./generator.js";
import voiceHandler from "./handler/voice.js";

const managerConstructor = (actions) => {
  const proxy = proxyGenerator(actions, voiceHandler);

  const proxyManager = (commandString) => {
    proxy.value = commandString;
  };

  return proxyManager;
};

export default managerConstructor;