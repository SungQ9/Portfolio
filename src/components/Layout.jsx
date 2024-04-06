import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  /* overflow-y: auto; */
  scroll-behavior: smooth;
`;

function Layout() {
  return (
    <Container>
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
    </Container>
  );
}

export default Layout;
