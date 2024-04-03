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

const NextButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border: 1px solid #fff;
  font-size: 1.5rem; // 버튼 내 글자 크기 조정
  font-weight: bold;
  cursor: pointer;
  z-index: 10; /* 상위에 위치하도록 z-index 설정 */
  @media (max-width: 768px) {
    font-size: 0.8rem; /* 화면이 작을 때 폰트 사이즈 조정 */
    min-width: 80px; /* 화면이 작을 때 버튼 너비 조정 */
  }
`;

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container id="home">
      <motion.div
        className="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ padding: "1rem" }}
      >
        <Text variants={childVariants} style={{ fontSize: "50px" }}>
          LEE SUNG KYU
        </Text>
        <SubText variants={childVariants} style={{ fontSize: "40px" }}>
          도전하는 개발자 이성규 입니다
        </SubText>

        <NextButton
          variants={childVariants}
          whileHover={{ scale: 1.1 }} // 호버 시 버튼이 커지는 효과 추가
          whileTap={{ scale: 0.95 }} // 탭(클릭) 시 버튼이 작아지는 효과 추가
          onClick={() => scrollToSection("about")} // 클릭 시 /about 경로로 이동
        >
          Next
        </NextButton>
      </motion.div>
    </Container>
  );
}

export default Home;
