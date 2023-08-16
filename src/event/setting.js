import { getTheme, switchTheme } from "../util/theme.js";

export const changeTheme = () => {
  const currentTheme = getTheme();
  if (currentTheme === "dark") {
    switchTheme("light");
  } else {
    switchTheme("dark");
  }
};