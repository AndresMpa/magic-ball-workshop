const generateAction = (target, outputHelper) => {
  const englishActions = {
    bounce: () => {
      (target.classList = "animate__animated"),
        "animate__bounce animate__infinite ball";
      outputHelper.innerText = "Bounce bounce bounce!";
    },
    zoom: () => {
      target.classList =
        "animate__animated animate__zoomIn animate__infinite ball";
      outputHelper.innerText = "Look at me!";
    },
    tada: () => {
      target.classList =
        "animate__animated animate__tada animate__infinite ball";
      outputHelper.innerText = "Say hello to my little friend!!";
    },
    out: () => {
      target.classList = "animate__animated animate__bounceOutUp ball";
      outputHelper.innerText = "Yes, master";
    },
    come: () => {
      target.classList = "animate__animated animate__bounceInUp ball";
      outputHelper.innerText = "Going lord";
    },
    ninja: () => {
      target.classList = "animate__animated animate__flipOutY ball";
      outputHelper.innerText = "In darkness we trust";
    },
    clear: () => {
      target.classList = "floating ball";
      outputHelper.innerText = "* Cleaning ball *";
    },
  };
  return englishActions;
};

export default generateAction;
