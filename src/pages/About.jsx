import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  width: 50px;
  height: 50px;
  margin-right: 5px;
  border-radius: 15px;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
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
  start: { opacity: 0 }, // 시작 시 투명도 0
  end: { opacity: 1, transition: { staggerChildren: 0.5 } }, // 끝날 때 투명도 1 및 자식 요소에 대한 stagger 애니메이션 적용
};

// 자식 요소의 애니메이션 효과 설정
export const showHideChild = {
  start: { y: -5, opacity: 0 }, // 시작 시 위로 이동하며 투명도 0
  end: { y: 0, opacity: 1 }, // 끝날 때 원래 위치로 이동하며 투명도 1
};
function About() {
  return (
    <Container>
      <motion.div variants={showHide} initial="start" animate="end">
        <Category variants={showHideChild}>
          <Title>ABOUT ME</Title>
          <div className="text">
            클릭해주셔서 감사합니다
            <br />
            저는 즐거운 개발자가 되고 싶은 이성규입니다. <br />
            시간을 내어 제 포트폴리오를 봐주셔서 감사합니다.
          </div>

          <div
            className="link"
            style={{ display: "flex", marginTop: "15px", width: "100px" }}
          >
            <a href="https://github.com/SungQ9">
              <AboutImg>
                <img src={require("../styles/img/GitLogo.png")} alt="CSS" />
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
                  <img src={require("../styles/img/HTML.png")} alt="Html" />
                </StackImg>
                <StackImg>
                  <img src={require("../styles/img/CSS.png")} alt="CSS" />
                </StackImg>
                <StackImg>
                  <img
                    src={require("../styles/img/JavaScript.png")}
                    alt="JavaScript"
                  />
                </StackImg>
                <StackImg>
                  <img src={require("../styles/img/React.png")} alt="React" />
                </StackImg>
              </StackList>
              <Subheading>- DataBase</Subheading>
              <StackList>
                <StackImg>
                  <img
                    src={require("../styles/img/MySQL-Dark.png")}
                    alt="MySQL"
                  />
                </StackImg>
                <StackImg>
                  <img
                    src={require("../styles/img/MariaDB.png")}
                    alt="MariaDB"
                  />
                </StackImg>
                <StackImg>
                  <img
                    src={require("../styles/img/MongoDB.png")}
                    alt="MongoDB"
                  />
                </StackImg>
              </StackList>
              <Subheading>- Etc</Subheading>
              <StackList>
                <StackImg>
                  <img src={require("../styles/img/AWS-Dark.png")} alt="AWS" />
                </StackImg>
                <StackImg>
                  <img src={require("../styles/img/Git.png")} alt="Git" />
                </StackImg>
                <StackImg>
                  <img src={require("../styles/img/Figma.png")} alt="Figma" />
                </StackImg>
              </StackList>
            </StackGroup>
            <StackGroup>
              <Subheading>- BackEnd</Subheading>
              <StackList>
                <StackImg>
                  <img src={require("../styles/img/Java.png")} alt="Java" />
                </StackImg>
                <StackImg>
                  <img src={require("../styles/img/Python.png")} alt="Python" />
                </StackImg>
                <StackImg>
                  <img src={require("../styles/img/Spring.png")} alt="Spring" />
                </StackImg>
                <StackImg style={{ opacity: 0 }}></StackImg>
              </StackList>
              <Subheading>- OS</Subheading>
              <StackList>
                <StackImg>
                  <img
                    src={require("../styles/img/Linux-Dark.png")}
                    alt="LINUX"
                  />
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
