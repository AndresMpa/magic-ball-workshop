import WebSpeech from "./WebApi/WebSpeech.js";

class AudioToText {
  constructor(config) {
    this.recordPlugin = config.recordPlugin;
    this.writerPlugin = config.writerPlugin;
    this.keywords = config.keywords || [];
    this.recordedFile = Object;
    this.currentText = "";

    this.__init__();
  }

  __init__() {
    this.recordedFile = new WebSpeech([this.keywords]);
  }

  record() {
    this.recordPlugin.prototype.heard(this);
  }

  get transcription() {
    this.writerPlugin.prototype.write(this);
    return this.currentText + "";
  }

  WebRecord() {
    this.recordedFile.startHandler();
    this.recordedFile.resultHandler();
  }

  WebWritter() {
    this.recordedFile.endHandler();
    this.recordedFile.errorHandler();
    this.currentText = this.recordedFile.getResult;
  }
}

export default AudioToText;