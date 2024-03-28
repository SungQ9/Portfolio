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
  padding: 20px;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  height: 400px;
  background-size: cover;
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

const showHide = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const showHideChild = {
  start: { y: -5, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <motion.div
      initial="start"
      animate="end"
      variants={showHide}
      className="Project"
    >
      <h2> Projects</h2>
      <Container>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            style={{ backgroundImage: `url(${project.thumbnail})` }}
            whileHover={{ scale: 1.05 }}
            variants={showHideChild}
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
