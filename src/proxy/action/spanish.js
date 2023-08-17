const generateAction = (target, outputHelper) => {
  const spanishActions = {
    rebota: () => {
      target.classList =
        "animate__animated animate__bounce animate__infinite ball";
      outputHelper.innerText = "¡¡Reboto como pelota loca!!";
    },
    salta: () => {
      target.classList =
        "animate__animated animate__zoomIn animate__infinite ball";
      outputHelper.innerText = "Voy y vuelvo, voy y vuelvo";
    },
    sorpresa: () => {
      target.classList =
        "animate__animated animate__tada animate__infinite ball";
      outputHelper.innerText = "¡Sorpresa!";
    },
    largo: () => {
      target.classList = "animate__animated animate__bounceOutUp ball";
      outputHelper.innerText = "Si, amo";
    },
    regresa: () => {
      target.classList = "animate__animated animate__bounceInUp ball";
      outputHelper.innerText = "Si, amo";
    },
    sigilo: () => {
      target.classList = "animate__animated animate__flipOutY ball";
      outputHelper.innerText = "Nada es verdad todo está permitido";
    },
    limpia: () => {
      target.classList = "floating ball";
    },
  };
  return spanishActions;
};

export default generateAction;
