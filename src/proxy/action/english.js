const generateAction = (target) => {
  const englishActions = {
    bounce: () => {
      target.classList = "animate__animated animate__bounce animate__infinite";
    },
    zoom: () => {
      target.classList = "animate__animated animate__zoomIn animate__infinite";
    },
    tada: () => {
      target.classList = "animate__animated animate__tada animate__infinite";
    },
    out: () => {
      target.classList = "animate__animated animate__bounceOutUp";
    },
    ninja: () => {
      target.classList = "animate__animated animate__flipOutY";
    },
    clear: () => {
      target.classList = "";
      target.style.background = "white";
    },
  };
  return englishActions;
};

export default generateAction;
