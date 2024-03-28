import React from "react";
import styled from "styled-components";
import gitlogoIcon from "../styles/img/GitLogo.png";
import slideIcon from "../styles/img/GoogleSlide.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  width: 60rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: -40px;
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

const ImageContainer = styled.div`
  width: 100%; // 컨테이너의 너비
  max-width: 95%; // 최대 너비를 설정하여 이미지가 너무 크게 표시되지 않도록 함
  height: 500px;
  overflow: clip; // 이미지가 컨테이너를 벗어나지 않도록 설정
`;

const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 컨테이너에 맞게 이미지를 조절
`;

const Detail = styled.div`
  width: 90%;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

function ProjectDetail({ project, onClose }) {
  return (
    <Background onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Content>
          <ImageContainer>
            <DetailImage src={project.thumbnail} alt="Project thumbnail" />
          </ImageContainer>
          <Detail>
            <div className="title">
              <h2>{project.name}</h2>
            </div>
            <div className="discription">
              <h3>
                <span>📄</span>
                Description
              </h3>
              <h5>{project.description}</h5>
            </div>
            <div className="skill">
              <h3>
                <span>🔧</span>
                Skill
              </h3>
              {project.skills.map((skill, index) => (
                <h5 key={index}>- {skill}</h5>
              ))}
            </div>
            <div className="site">
              <p>
                <IconImage src={slideIcon} alt="SlideIcon" />
                <a
                  href={project.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Documentation
                </a>
              </p>
              {project.url && (
                <p>
                  <span>🌐</span>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </a>
                </p>
              )}
            </div>
            <div>
              <p>
                <IconImage src={gitlogoIcon} alt="GitlogoIcon" />
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </Detail>
        </Content>
      </Container>
    </Background>
  );
}

export default ProjectDetail;
