const generateAction = (target) => {
  const spanishActions = {
    rebota: () => {
      target.classList = "animate__animated animate__bounce animate__infinite";
    },
    salta: () => {
      target.classList = "animate__animated animate__zoomIn animate__infinite";
    },
    sorpresa: () => {
      target.classList = "animate__animated animate__tada animate__infinite";
    },
    largo: () => {
      target.classList = "animate__animated animate__bounceOutUp";
    },
    sigilo: () => {
      target.classList = "animate__animated animate__flipOutY";
    },
    limpia: () => {
      target.classList = "";
      target.style.background = "white";
    },
  };
  return spanishActions;
};

export default generateAction;
