import { proxyGenerator } from "./generator.js";
import voiceHandler from "./handler/voice.js";

const extendActions = (commandName, actions, outputHelper, message) => {
  const keys = () => {
    outputHelper.innerText =
      `${message}` + `${Object.keys(actions).toString().replaceAll(",", ", ")}`;
  };
  actions[commandName] = keys;

  return actions;
};

const managerConstructor = (actions) => {
  const proxy = proxyGenerator(actions, voiceHandler);

  const proxyManager = (commandString) => {
    proxy.value = commandString;
  };

  return proxyManager;
};

export { managerConstructor, extendActions };
