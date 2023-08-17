const generateAction = (target, outputHelper) => {
  const spanishActions = {
    rebota: () => {
      target.classList = "animate__animated animate__bounce animate__infinite";
      outputHelper.innerText = "¡¡Reboto como pelota loca!!";
    },
    salta: () => {
      target.classList = "animate__animated animate__zoomIn animate__infinite";
      outputHelper.innerText = "Voy y vuelvo, voy y vuelvo";
    },
    sorpresa: () => {
      target.classList = "animate__animated animate__tada animate__infinite";
      outputHelper.innerText = "¡Sorpresa!";
    },
    largo: () => {
      target.classList = "animate__animated animate__bounceOutUp";
      outputHelper.innerText = "Si, amo";
    },
    regresa: () => {
      target.classList = "animate__animated animate__bounceInUp";
      outputHelper.innerText = "Si, amo";
    },
    sigilo: () => {
      target.classList = "animate__animated animate__flipOutY";
      outputHelper.innerText = "Nada es verdad todo está permitido";
    },
    limpia: () => {
      target.classList = "";
    },
  };
  return spanishActions;
};

export default generateAction;
