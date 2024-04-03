import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import gitlogoIcon from "../styles/img/GitLogo.png";
import htmlIcon from "../styles/img/HTML.png";
import cssIcon from "../styles/img/CSS.png";
import javascriptIcon from "../styles/img/JavaScript.png";
import reactIcon from "../styles/img/React.png";
import mysqlIcon from "../styles/img/MySQL-Dark.png";
import mariadbIcon from "../styles/img/MariaDB.png";
import mongodbIcon from "../styles/img/MongoDB.png";
import awsIcon from "../styles/img/AWS-Dark.png";
import gitIcon from "../styles/img/Git.png";
import figmaIcon from "../styles/img/Figma.png";
import javaIcon from "../styles/img/Java.png";
import pythonIcon from "../styles/img/Python.png";
import springIcon from "../styles/img/Spring.png";
import linuxIcon from "../styles/img/Linux-Dark.png";

// 섹션 padding
const Container = styled.section`
  padding: 5%;
`;

// styled-components와 framer-motion을 사용하여 Category 컴포넌트 스타일링
const Category = styled(motion.div)`
  color: #333;
  margin-bottom: 50px;
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
  padding-top: 10px;
  padding-bottom: 10px;
  grid-template-columns: repeat(3, 60px);
  gap: 10px;
  padding-left: 5px;
`;

// StackImg 컴포넌트 스타일링
const StackImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 5px;
  margin-bottom: 25px;
  border-radius: 15px;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
  }
  .stack-name {
    margin-top: 2px;
    font-weight: 500;
    font-size: 12px;
  }
`;

// Subheading 컴포넌트 스타일링
const Subheading = styled.h3`
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: 600;
  padding-left: 10px;
`;

// 타이틀 컴포넌트 스타일링
const Title = styled.h4`
  margin-bottom: 20px; // 타이틀과 내용 사이의 여백
`;

// framer-motion을 이용한 애니메이션 효과 설정
export const showHide = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 }, // 자식 컴포넌트들 사이에 stagger 적용
  },
};

// Category 내부 요소에 적용될 애니메이션
export const showHideChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function About() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);
  return (
    <Container id="about">
      <motion.div variants={showHide} initial="hidden" animate="visible">
        <Category variants={showHideChild}>
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

        <Category variants={showHideChild}>
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

        <Category variants={showHideChild}>
          <Title>STACKS</Title>
          <StackSection>
            <StackGroup>
              <Subheading>- FrontEnd</Subheading>
              <StackList>
                <StackImg>
                  <div className="stack-icon">
                    <img src={htmlIcon} alt="Html" />
                  </div>
                  <div className="stack-name">HTML</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={cssIcon} alt="CSS" />
                  </div>
                  <div className="stack-name">CSS</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={javascriptIcon} alt="JavaScript" />
                  </div>
                  <div className="stack-name">Javascript</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={reactIcon} alt="React" />
                  </div>
                  <div className="stack-name">React</div>
                </StackImg>
              </StackList>
              <Subheading>- DataBase</Subheading>
              <StackList>
                <StackImg>
                  <div className="stack-icon">
                    <img src={mysqlIcon} alt="MySQL" />
                  </div>
                  <div className="stack-name">MySQL</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={mariadbIcon} alt="MariaDB" />
                  </div>
                  <div className="stack-name">MariaDB</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={mongodbIcon} alt="MongoDB" />
                  </div>
                  <div className="stack-name">MongoDB</div>
                </StackImg>
              </StackList>
              <Subheading>- Etc</Subheading>
              <StackList>
                <StackImg>
                  <div className="stack-icon">
                    <img src={awsIcon} alt="AWS" />
                  </div>
                  <div className="stack-name">AWS EC2</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={gitIcon} alt="Git" />
                  </div>
                  <div className="stack-name">Git</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={figmaIcon} alt="Figma" />
                  </div>
                  <div className="stack-name">Figma</div>
                </StackImg>
              </StackList>
            </StackGroup>
            <StackGroup>
              <Subheading>- BackEnd</Subheading>
              <StackList>
                <StackImg>
                  <div className="stack-icon">
                    <img src={javaIcon} alt="Java" />
                  </div>
                  <div className="stack-name">Java</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={pythonIcon} alt="Python" />
                  </div>
                  <div className="stack-name">Python</div>
                </StackImg>
                <StackImg>
                  <div className="stack-icon">
                    <img src={springIcon} alt="Spring" />
                  </div>
                  <div className="stack-name">Spring</div>
                </StackImg>
                <StackImg style={{ opacity: 0 }}></StackImg>
              </StackList>
              <Subheading>- OS</Subheading>
              <StackList>
                <StackImg>
                  <div className="stack-icon">
                    <img src={linuxIcon} alt="LINUX" />
                  </div>
                  <div className="stack-name">Linux</div>
                </StackImg>
              </StackList>
            </StackGroup>
          </StackSection>
        </Category>
      </motion.div>
    </Container>
  );
}

export default About;
