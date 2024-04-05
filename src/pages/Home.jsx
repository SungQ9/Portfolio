import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 컨테이너의 애니메이션 효과를 정의한 객체
const containerVariants = {
  hidden: { opacity: 0, y: 20 }, // 시작 위치를 조금 아래에서 시작하도록 수정
  visible: {
    opacity: 1,
    y: 0, // 최종 위치는 원래 위치
    transition: {
      staggerChildren: 0.3, // 자식 컴포넌트 간에 애니메이션 간격 설정
      when: "beforeChildren", // 컨테이너 애니메이션이 자식들 애니메이션 전에 시작
    },
  },
};

// 자식 컴포넌트의 애니메이션 효과를 정의한 객체
const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // 자식 컴포넌트 애니메이션 지속 시간 설정
    },
  },
};

const Text = styled(motion.h1)`
  display: flex;
  justify-content: center;
  background: #fff;
  color: #000;
  font-size: 4rem; // 기본 글자 크기
  @media (max-width: 768px) {
    font-size: 2rem; // 화면이 768px 이하일 때 글자 크기
  }
`;

const SubText = styled(motion.h2)`
  font-size: 3rem; // 기본 글자 크기
  @media (max-width: 768px) {
    font-size: 1.5rem; // 화면이 768px 이하일 때 글자 크기
  }
`;

const Cursor = styled(motion.div)`
  position: relative;
  bottom: -50%;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;
`;

const CursorBefore = styled(motion.div)`
  position: relative;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #fff;
  border-radius: 100%;
  animation: sdb 1s infinite;
  box-sizing: border-box;

  @keyframes sdb {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

function Home({ isVisible }) {
  return (
    <Container id="home">
      <motion.div
        className="home"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{ padding: "1rem" }}
      >
        <Text variants={childVariants} style={{ fontSize: "50px" }}>
          LEE SUNG KYU
        </Text>
        <SubText variants={childVariants} style={{ fontSize: "40px" }}>
          도전하는 개발자 이성규 입니다
        </SubText>
        <Cursor variants={childVariants}>
          <CursorBefore />
        </Cursor>
      </motion.div>
    </Container>
  );
}

export default Home;
