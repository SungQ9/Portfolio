import React from "react";
import Wrapper from "./components/Wrapper.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Wrapper />
    </ThemeProvider>
  );
}

export default App;
