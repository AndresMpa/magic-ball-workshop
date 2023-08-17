const supportedBrowsers = ["Chrome", "Safari", "Edge"];
const message = `
<h3>
  Oops...
</h3>
<p>
  It seems that we can support your browser under, supported browsers are ${supportedBrowsers.toString()}
</p>
`;

const error = document.querySelector("#error");

const loadError = (customMessage = message) => {
  error.innerHTML = customMessage;
  error.parentNode.style.display = "flex";
};

export { loadError };
