import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// 화면 중앙에 컨텐츠를 배치하기 위한 스타일드 컴포넌트
const Container = styled.div`
  width: 100%;
  height: 100%;
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

// 다음으로 이동하는 버튼을 스타일링한 컴포넌트
const NextButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border: 1px solid #000;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px; // 버튼과 위 텍스트 사이 간격 추가
`;

function Home() {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  return (
    <Container>
      <motion.div
        className="Home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={childVariants} style={{ fontSize: "50px" }}>
          LEE SUNG KYU
        </motion.h1>
        <motion.h2 variants={childVariants} style={{ fontSize: "40px" }}>
          안녕하세요 이성규입니다
        </motion.h2>

        <NextButton
          variants={childVariants}
          whileHover={{ scale: 1.1 }} // 호버 시 버튼이 커지는 효과 추가
          whileTap={{ scale: 0.95 }} // 탭(클릭) 시 버튼이 작아지는 효과 추가
          onClick={() => navigate("/about")} // 클릭 시 /about 경로로 이동
        >
          Next
        </NextButton>
      </motion.div>
    </Container>
  );
}

export default Home;
