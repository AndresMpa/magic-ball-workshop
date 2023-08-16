import { getRecordMethod, languageDetector } from "../util/navigator.js";

import spanishActions from "../proxy/action/spanish.js";
import englishActions from "../proxy/action/english.js";
import managerConstructor from "../proxy/manager.js";

import AudioToText from "../Speech/AudioToText.js";
import FileToText from "../Speech/WebApi/plugin/FileToText.js";
import RecordToFile from "../Speech/WebApi/plugin/RecordToFile.js";

const target = document.querySelector("#ball");

const recordMethod = getRecordMethod();
let browserInstance;
let actions;

if (languageDetector("es")) {
  actions = spanishActions(target);
} else {
  actions = englishActions(target);
}

const proxy = managerConstructor(actions);

if (recordMethod === "Not supported") {
  console.log("It seems we can not communicate");
} else {
  browserInstance = new AudioToText({
    writerPlugin: FileToText,
    recordPlugin: RecordToFile,
    keywords: Object.keys(proxy),
  });
}

const record = () => browserInstance.record();

const transcript = (output) => {
  let transcription = browserInstance.transcription;
  output.value += transcription;
  proxy.value = transcription;
};

export { record, transcript };
