import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CloseButton = styled.button`
  position: relative;
  border-radius: 5px;
  background: none;
  color: #ffffff;
  font-size: 25px;
  right: 350px;
  width: 50px;
  height: 50px;
  align-self: flex-end;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%; // 컨테이너의 너비
  max-width: 400px; // 최대 너비를 설정하여 이미지가 너무 크게 표시되지 않도록 함
  height: auto; // 높이는 자동으로 조절되도록 설정
  overflow: hidden; // 이미지가 컨테이너를 벗어나지 않도록 설정
`;

const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 컨테이너에 맞게 이미지를 조절
`;

function ProjectDetail({ project, onClose }) {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalContent>
          <h2>{project.name}</h2>
          <ImageContainer>
            <DetailImage src={project.thumbnail} alt="Project thumbnail" />
          </ImageContainer>
          <p>{project.description}</p>
          <p>Skill: {project.technologies.join(", ")}</p>
          <p>
            <a href={project.docUrl} target="_blank" rel="noopener noreferrer">
              Project Documentation
            </a>
          </p>
          <p>
            <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </p>
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ProjectDetail;
