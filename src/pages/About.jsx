import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gitlogoIcon from "../styles/img/GitLogo.png";

// 섹션 padding
const Container = styled.section`
  padding: 4%;
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 }, // 시작 위치를 조금 아래에서 시작하도록 수정
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25, // 자식 컴포넌트 간에 애니메이션 간격 설정
      when: "beforeChildren", // 컨테이너 애니메이션이 자식들 애니메이션 전에 시작
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // 자식 컴포넌트 애니메이션 지속 시간 설정
    },
  },
};

// styled-components와 framer-motion을 사용하여 Category 컴포넌트 스타일링
const Category = styled(motion.div)`
  color: #333;
  margin-bottom: 7%;
  .text {
    line-height: 25px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const AboutImg = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 15px;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
  }
`;

// StackSection 컴포넌트 스타일링
const StackSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // 아이템 사이 공간 동등하게 분배
`;

// StackGroup 컴포넌트 스타일링
const StackGroup = styled.div`
  flex-basis: calc(50% - 10px); // 50% 공간을 차지하되, 간격을 위해 조정
  margin-bottom: 20px; // 섹션 아래쪽 마진

  &:not(:last-child) {
    margin-right: 15px; // 오른쪽 섹션에만 마진 적용
  }
`;

// StackList 컴포넌트 스타일링
const StackList = styled.div`
  display: grid;
  padding-bottom: 15px;
  grid-template-columns: repeat(4, 100px);
  gap: 5px;
  align-items: center;
  justify-items: start;
`;

const StackName = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80px;
  margin-left: 10px;
  font-weight: 500;
`;

// Subheading 컴포넌트 스타일링
const Subheading = styled.h3`
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: 700;
  padding-left: 10px;
  padding-bottom: 1%;
  border-bottom: 1px solid #000;
  width: 400px;
`;

// 타이틀 컴포넌트 스타일링
const Title = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  margin-bottom: 20px; // 타이틀과 내용 사이의 여백
  border: 1px solid #000;
  border-radius: 15px;
  background-color: #000;
  color: #fff;
`;

function About({ isVisible }) {
  return (
    <Container id="about">
      <motion.div
        className="about"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{ padding: "1rem" }}
      >
        <Category variants={childVariants}>
          <Title>ABOUT ME</Title>
          <div className="text">
            저는 프론트엔드와 백엔드 기술을 모두 아우르는 웹 개발자가 되고자
            하는 열정을 가지고 있습니다. <br />
            사용자 경험을 강화하는 인터페이스 개발에 흥미가 있고, 동시에
            안정적인 서버 사이드 애플리케이션 구축에 대한 이해에 깊은 관심이
            있습니다
          </div>
          <div
            className="link"
            style={{ display: "flex", marginTop: "15px", width: "100px" }}
          >
            <a href="https://github.com/SungQ9">
              <AboutImg>
                <img src={gitlogoIcon} alt="CSS" />
              </AboutImg>
            </a>
          </div>
        </Category>

        <Category variants={childVariants}>
          <Title>EDUCATION</Title>
          <ul>
            <li>2024.02 ~ 한국방송통신대학교 (컴퓨터과학과) 재학中</li>
            <li>
              2023.08 ~ 2024.02 한국ICT인재개발원 - JAVA 개발자 양성과정 수료
            </li>
            <ul style={{ paddingLeft: "20px" }}>
              <li>SW인재상 수상</li>
              <li>특모범상 수상 </li>
            </ul>
            <li>
              2018.02 ~ 2018.06 SBS아카데미컴퓨터학원 - 모션그래퍼 디자인과정
              수료
            </li>
          </ul>
        </Category>

        <Category variants={childVariants}>
          <Title>STACKS</Title>
          <StackSection>
            <StackGroup>
              <Subheading>FE</Subheading>
              <StackList>
                <StackName>HTML5</StackName>
                <StackName>CSS3</StackName>
                <StackName>Javascript</StackName>
                <StackName>React</StackName>
              </StackList>
              <Subheading>DB</Subheading>
              <StackList>
                <StackName>MySQL</StackName>
                <StackName>MariaDB</StackName>
                <StackName>MongoDB</StackName>
              </StackList>
              <Subheading>ETC</Subheading>
              <StackList>
                <StackName>AWS EC2</StackName>
                <StackName>Git</StackName>
                <StackName>Figma</StackName>
              </StackList>
            </StackGroup>
            <StackGroup>
              <Subheading>BE</Subheading>
              <StackList>
                <StackName>Java11</StackName>
                <StackName>Python</StackName>
                <StackName>Spring</StackName>
              </StackList>
              <Subheading>OS</Subheading>
              <StackList>
                <StackName>Linux</StackName>
              </StackList>
            </StackGroup>
          </StackSection>
        </Category>
      </motion.div>
    </Container>
  );
}

export default About;
