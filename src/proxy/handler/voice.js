const voiceHandler = {
  set(obj, prop, value) {
    const stringValue = value.split(" ");
    const keys = Object.keys(obj);

    stringValue.forEach((element) => {
      if (keys.includes(element)) {
        obj[element](value);
      }

      let suggestion = keys.find((key) => {
        return Levenshtein.get(key, value) <= LEVENSHTEIN_DISTANCE;
      });

      if (suggestion) {
        obj[suggestion](value);
      }
    });

    return true;
  },
};

export default voiceHandler;
