import { loadError } from "../error/browser.js";

import { getRecordMethod, languageDetector } from "../util/navigator.js";

import { managerConstructor, extendActions } from "../proxy/manager.js";
import spanishActions from "../proxy/action/spanish.js";
import englishActions from "../proxy/action/english.js";

import AudioToText from "../Speech/AudioToText.js";
import FileToText from "../Speech/WebApi/plugin/FileToText.js";
import RecordToFile from "../Speech/WebApi/plugin/RecordToFile.js";

const textBoxOutput = document.querySelector("#monitor");
const target = document.querySelector("#ball");

const recordMethod = getRecordMethod();
let browserInstance;
let actions;

if (languageDetector("es")) {
  actions = spanishActions(target, textBoxOutput);
  actions = extendActions("ayuda", actions, textBoxOutput, "Mis comandos son ");
} else {
  actions = englishActions(target, textBoxOutput);
  actions = extendActions("help", actions, textBoxOutput, "My commands are ");
}

const proxy = managerConstructor(actions);

if (recordMethod === "Not supported") {
  loadError();
} else {
  browserInstance = new AudioToText({
    writerPlugin: FileToText,
    recordPlugin: RecordToFile,
    keywords: Object.keys(proxy),
  });
}

const record = () => browserInstance.record();

const transcript = (output) => {
  setTimeout(() => {
    let transcription = browserInstance.transcription;
    output.innerText = transcription;
    proxy(transcription);
  }, 800);
};

export { record, transcript };
