import React from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";
import Header from "./Header.jsx";
import Layout from "./Layout.jsx";
import Footer from "./Footer.jsx";
import NavButton from "./NavButton.jsx";
import { motion } from "framer-motion";

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

function Wrapper() {
  const { theme } = useTheme();
  return (
    <PageContainer
      animate={{
        backgroundColor: theme.backColor,
        color: theme.textColor,
        transition: { duration: 1 },
      }}
    >
      <Header />
      <ContentContainer>
        <Layout />
        <NavButton />
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default Wrapper;
