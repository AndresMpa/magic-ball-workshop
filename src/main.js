import { record, transcript } from "./event/record.js";
import { changeTheme } from "./event/setting.js";
import { preloadTheme  } from "./util/theme.js";

preloadTheme();

const recorder = document.querySelector("#record");
const monitor = document.querySelector("#monitor");
const setting = document.querySelector("#setting");

recorder.addEventListener("mousedown", record, false)
recorder.addEventListener("mouseup", transcript(monitor), false)
setting.addEventListener("click", changeTheme, false);