import React from "react";
import styled from "@emotion/styled";
import arrow from "../styles/img/arrow-up.png";

const Container = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  display: flex;
  flex-direction: column; // 자식 요소들을 수직으로 쌓기
  justify-content: center;
  align-items: center; // 수직 정렬을 위해 중앙 정렬
  text-align: center;
  width: 50px;
  height: 50px;
  background-color: #f8f9fa;
  padding: 10px 20px;
  box-sizing: border-box;
  gap: 5px; // 이미지와 텍스트 사이의 간격 설정
  background: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 30px;
  height: auto;
`;

const Text = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 600;
`;

function NavButton() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container id="navButton" onClick={() => scrollToSection("home")}>
      <Image src={arrow} alt="arrow" />
      <Text>Top</Text>
    </Container>
  );
}

export default NavButton;
