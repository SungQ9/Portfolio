import React, { createContext, useContext, useState } from "react";

// ThemeContext 및 useTheme 훅 정의
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backColor: "black",
    textColor: "white",
    transition: { duration: 1, ease: "easeInOut" },
  });

  const updateTheme = (sectionId) => {
    let newTheme; // 여기서 newTheme는 객체를 저장하기 위한 변수입니다.
    switch (sectionId) {
      case "home":
        newTheme = { backColor: "black", textColor: "white" };
        break;
      case "about":
        newTheme = { backColor: "white", textColor: "black" };
        break;
      case "projects":
        newTheme = { backColor: "white", textColor: "black" };
        break;
      default:
        newTheme = { backColor: "black", textColor: "white" }; // 기본값
    }
    setTheme((prevTheme) => ({
      ...newTheme,
      transition: prevTheme.transition,
    }));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
