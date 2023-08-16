const languageDetector = (target) => {
  return navigator.languages.includes(target);
};

const getRecordMethod = () => {
  const browsers = {
    OPR: "Not supported",
    MSIE: "Not supported",
    Opera: "Not supported",
    Firefox: "Not supported",
    Chrome: "WebAPI",
    Safari: "WebAPI",
    Edge: "WebAPI",
  };

  Object.keys(browsers).forEach((browser) => {
    if (navigator.userAgent.indexOf(browser) != -1) {
      return {
        recordMethod: browsers[browser],
      };
    }
  });
};

export { languageDetector, getRecordMethod };
