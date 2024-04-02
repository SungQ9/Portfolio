import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

const Container = styled.div`
  scroll-snap-type: y proximity;
  height: 100vh;
  overflow-y: scroll;
`;

function Layout() {
  return (
    <Container>
      <Section>
        <Home />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
    </Container>
  );
}

export default Layout;
