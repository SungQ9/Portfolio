import React from "react";
import styled from "styled-components";
import gitlogoIcon from "../styles/img/GitLogo.png";
import slideIcon from "../styles/img/GoogleSlide.png";
import webIcon from "../styles/img/WebIcon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow } from "../etc/arrow";
import { PrevArrow } from "../etc/arrow";

// 슬라이더 설정
const settings = {
  dots: true, // 하단 점으로 페이지 넘김 표시
  infinite: true, // 무한 루프
  speed: 500, // 넘기는 속도
  slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
  slidesToScroll: 1, // 한 번에 넘길 슬라이드 수
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 95%;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Content = styled.div`
  background-color: white;
  padding: 14px;
  border-radius: 10px;
  max-width: 90%;
  width: 50rem;
  height: 93vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative; // 절대 위치 설정
  top: 50%; // 상단으로부터 50% 위치
  left: 50%; // 왼쪽으로부터 50% 위치
  transform: translate(-50%, -50%); // X와 Y축으로 -50% 이동하여 중앙 정렬

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: -60px;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 25%;
  background: none;

  color: #fff;

  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 600px;
  height: 400px;
  align-items: center;
  overflow: hidden;
`;

const SliderImageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Detail = styled.div`
  width: 90%;
  margin-bottom: 5%;
`;

const DiscriptionContainer = styled.div`
  display: columns;
`;

const DiscriptText = styled.h5`
  margin: 2px 0;
  font-weight: 500;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 1px; // 스킬 항목 사이의 간격
  margin-top: 2px; // 상단 여백 조정
`;

const SkillItem = styled.h5`
  flex: 1 1 20%; // 4개 항목이 한 줄에 들어갈 수 있도록 설정
  max-width: 25%; // gap을 고려한 최대 너비 설정
  height: auto; // 높이를 자동으로 설정하여 내용에 맞춤
  margin: 5px 0; // 위아래 마진 추가
`;

const LinkWrapper = styled.div`
  display: flex;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 5%;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

function ProjectDetail({ project, onClose }) {
  return (
    <Background onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Content>
          <CloseButton onClick={onClose}>X</CloseButton>
          <Title>
            <h3 style={{ margin: "0 0 15px 0" }}>{project.name}</h3>
            <h5 style={{ margin: 0 }}>{project.subname}</h5>
          </Title>
          <ImageContainer>
            <Slider {...settings}>
              {project.images.map((img, index) => (
                <SliderImageWrapper key={index}>
                  <DetailImage src={img} alt={`Project img ${index + 1}`} />
                </SliderImageWrapper>
              ))}
            </Slider>
          </ImageContainer>
          <Detail>
            <DiscriptionContainer>
              <h3>
                <span>📄</span>
                Description
              </h3>
              {project.description.map((text, index) => (
                <DiscriptText key={index}>{text}</DiscriptText>
              ))}
            </DiscriptionContainer>
            <div className="skills">
              <h3>
                <span>🔧</span>
                Skill
              </h3>
              <SkillsContainer>
                {project.skills.map((skill, index) => (
                  <SkillItem key={index}>☑️{skill}</SkillItem>
                ))}
              </SkillsContainer>
            </div>

            <h3>
              <span>🚀</span>
              Link
            </h3>
            <LinkWrapper>
              {project.docUrl && (
                <LinkContainer>
                  <IconImage src={slideIcon} alt="SlideIcon" />
                  <a
                    href={project.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GoogleSlide
                  </a>
                </LinkContainer>
              )}
              {project.url && (
                <LinkContainer>
                  <IconImage src={webIcon} alt="SlideIcon" />

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Static Site
                  </a>
                </LinkContainer>
              )}

              <LinkContainer>
                <IconImage src={gitlogoIcon} alt="GitlogoIcon" />
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </LinkContainer>
            </LinkWrapper>
          </Detail>
        </Content>
      </Container>
    </Background>
  );
}

export default ProjectDetail;
