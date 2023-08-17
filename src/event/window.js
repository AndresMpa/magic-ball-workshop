const greeter = (output) => {
  let label = "Time to speak!";
  if (window.navigator.language.includes("es")) {
    label = "Hola, soy la bola";
  }

  output.textContent = `${label}`;
};

export { greeter };
