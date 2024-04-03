import React, { createContext, useContext, useState } from "react";

// ThemeContext 및 useTheme 훅 정의
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backColor: "black",
    textColor: "white",
  });

  // 현재 활성화된 섹션을 기반으로 테마 상태를 업데이트하는 함수
  const updateTheme = (sectionId) => {
    switch (sectionId) {
      case "home":
        setTheme({ backColor: "black", textColor: "white" });
        break;
      case "about":
        setTheme({ backColor: "white", textColor: "black" });
        break;
      case "projects":
        setTheme({ backColor: "white", textColor: "black" });
        break;
      // 여기에 다른 페이지에 대한 케이스를 추가할 수 있습니다.
      default:
        setTheme({ backColor: "black", textColor: "white" }); // 기본값
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
