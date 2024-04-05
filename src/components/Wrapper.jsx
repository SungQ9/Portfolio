import React from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";
import Header from "./Header.jsx";
import Layout from "./Layout.jsx";
import Footer from "./Footer.jsx";
import NavButton from "./NavButton.jsx";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

function Wrapper() {
  const { theme } = useTheme();
  const transition = {
    duration: 0.5,
    ease: "0.5s ease-in-out, color 0.5s ease-in-out",
  };

  return (
    <Container
      animate={{
        backgroundColor: theme.backColor,
        color: theme.textColor,
      }}
      transition={transition}
    >
      <Header transition={transition} />
      <ContentContainer
        animate={{ backgroundColor: theme.backColor, color: theme.textColor }}
        transition={transition}
      >
        <Layout />
        <NavButton />
      </ContentContainer>
      <Footer transition={transition} />
    </Container>
  );
}

export default Wrapper;
