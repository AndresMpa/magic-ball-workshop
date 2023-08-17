const generateAction = (target, outputHelper) => {
  const englishActions = {
    bounce: () => {
      target.classList = "animate__animated animate__bounce animate__infinite";
      outputHelper.innerText = "Bounce bounce bounce!";
    },
    zoom: () => {
      target.classList = "animate__animated animate__zoomIn animate__infinite";
      outputHelper.innerText = "Look at me!";
    },
    tada: () => {
      target.classList = "animate__animated animate__tada animate__infinite";
      outputHelper.innerText = "Say hello to my little friend!!";
    },
    out: () => {
      target.classList = "animate__animated animate__bounceOutUp";
      outputHelper.innerText = "Yes, master";
    },
    come: () => {
      target.classList = "animate__animated animate__bounceInUp";
      outputHelper.innerText = "Going lord";
    },
    ninja: () => {
      target.classList = "animate__animated animate__flipOutY";
      outputHelper.innerText = "In darkness we trust";
    },
    clear: () => {
      target.classList = "";
      outputHelper.innerText = "* Cleaning ball *";
    },
  };
  return englishActions;
};

export default generateAction;
