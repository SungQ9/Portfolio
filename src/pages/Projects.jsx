import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import projects from "../etc/projects";

const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2%;
  padding: 20px;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

// 컨테이너의 애니메이션 효과를 정의한 객체
const containerVariants = {
  hidden: { opacity: 0, y: 20 }, // 시작 위치를 조금 아래에서 시작하도록 수정
  visible: {
    opacity: 1,
    y: 0, // 최종 위치는 원래 위치
    transition: {
      staggerChildren: 0.25, // 자식 컴포넌트 간에 애니메이션 간격 설정
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 15px;
  width: 150px;
  height: 30px;
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 0 3%;
  background-color: #000;
  color: #fff;
`;

const ProjectCard = styled(motion.div)`
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 4px 3px rgba(0, 0, 0, 0.2);
  &:hover .project-info {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 24rem;
    height: 24rem;
  }
  @media (max-width: 768px) {
    width: calc(50% - 10px); // 태블릿과 모바일 화면에서는 카드 너비를 조정
  }
  @media (max-width: 480px) {
    width: 100%; // 가장 작은 화면에서는 카드를 한 줄로 표시
  }
`;

const ProjectInfo = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  position: absolute;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: #000;
  color: #fff;
  height: 50px;
  width: 250px;
`;

function Projects({ isVisible }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <motion.div
      id="projects"
      className="Project"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      style={{ background: "#fff", padding: "2%" }}
    >
      <Title> Projects</Title>
      <Container variants={childVariants}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            style={{ backgroundImage: `url(${project.images[0]})` }}
            whileHover={{ scale: 1.05 }}
          >
            <ProjectInfo className="project-info">
              <Button onClick={() => handleDetailClick(project)}>Detail</Button>
              <div>{project.name}</div>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </Container>
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.div>
  );
}

export default Projects;
