import { record, transcript } from "./event/record.js";
import { changeTheme } from "./event/setting.js";
import { greeter } from "./event/window.js";

import { preloadTheme } from "./util/theme.js";

const recorder = document.querySelector("#record");
const monitor = document.querySelector("#monitor");
const setting = document.querySelector("#setting");

window.addEventListener(
  "load",
  () => {
    preloadTheme();
    greeter(monitor);
  },
  false
);
recorder.addEventListener("mousedown", () => record(), false);
recorder.addEventListener("mouseup", () => transcript(monitor), false);
setting.addEventListener("click", () => changeTheme(), false);
