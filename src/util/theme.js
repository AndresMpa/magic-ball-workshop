const preloadTheme = () => {
  if (
    localStorage.getItem("theme") === "light" ||
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};

const getTheme = () => {
  return document.documentElement.getAttribute("data-theme");
};

const switchTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};

export { getTheme, preloadTheme, switchTheme };
