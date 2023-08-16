import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";
import useTodoState from './../hooks/useTodoState';
console.log(useToggle);

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggle(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
