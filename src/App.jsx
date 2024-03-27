import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <div className="contents">
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<ProjectDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
