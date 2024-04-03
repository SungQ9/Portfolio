import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "../context/ThemeContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  align-items: center;
  -webkit-box-align: center;
  margin: 0px auto;
  padding: 0 2.5%; /* 양 옆 여백 조정 */
  width: 95%;
  height: 70px; /* 헤더 높이 설정 */
  background-color: #f8f9fa; /* 헤더 배경색 설정 */
  border-bottom: 1px solid #000;
`;

const Title = styled.h2`
  font-size: 1.2rem; /* 제목 폰트 사이즈 */
  margin: 0; /* 제목 마진 제거 */
  font-weight: 500;
  cursor: pointer;
`;

const Navigator = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
`;

const NavLink = styled.div`
  font-size: 1rem; /* 링크 폰트 사이즈 */
  font-weight: 500;
  margin: 0 0.35rem; /* 좌우 마진 */
  padding: 0.5rem 1rem; /* 패딩 조정 */
  cursor: pointer;
  border-radius: 5px; /* 경계선 둥글게 */
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem; /* 모바일에서 폰트 사이즈 조정 */
    margin: 0 0.5rem; /* 모바일에서 마진 조정 */
  }
`;

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log(`Scrolling to ${sectionId}`); // 디버깅을 위한 로그
    } else {
      console.log(`Section with ID ${sectionId} not found.`); // 섹션을 찾지 못한 경우 로그
    }
  };

  const { theme } = useTheme();

  return (
    <Container style={{ background: theme.backColor, color: theme.textColor }}>
      <Title onClick={() => scrollToSection("home")}>SungQ</Title>
      <Navigator>
        <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
        <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
        <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
      </Navigator>
    </Container>
  );
}

export default Header;
