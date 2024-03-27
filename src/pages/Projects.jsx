import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import Trent from "../styles/img/Trent-thum.png";

const projects = [
  {
    id: 1,
    name: "T'Rent",
    thumbnail: Trent,
    description: "가전렌탈서비스 플랫폼",
    technologies: ["React", "Node.js"],
    gitUrl: "https://github.com/MidProject-Rental-Service/trent",
    docUrl: "https://docs.google.com/document/d/project1",
  },
  {
    id: 2,
    name: "DR.Pick",
    thumbnail: Trent,
    description: "비대면(화상) 진료 및 통합 의료 서비스",
    technologies: ["React", "Node.js"],
    gitUrl: "https://github.com/finalProject-doctorPick",
    docUrl: "https://docs.google.com/document/d/project1",
  },
  {
    id: 3,
    name: "T'Rent",
    thumbnail: Trent,
    description: "가전렌탈서비스 플랫폼",
    technologies: ["React", "Node.js"],
    gitUrl: "https://github.com/MidProject-Rental-Service/trent",
    docUrl: "https://docs.google.com/document/d/project1",
  },
  {
    id: 4,
    name: "DR.Pick",
    thumbnail: Trent,
    description: "비대면(화상) 진료 및 통합 의료 서비스",
    technologies: ["React", "Node.js"],
    gitUrl: "https://github.com/finalProject-doctorPick",
    docUrl: "https://docs.google.com/document/d/project1",
  },
];

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 75px;
  padding: 20px;
`;

const ProjectCard = styled(motion.div)`
  border-radius: 5px;
  width: 400px;
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
    padding-bottom: 50px;
    align-items: center;
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
  background-color: #000;
  color: #fff;
  height: 50px;
  width: 250px;
`;

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="Project">
      <h2> Projects</h2>
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            style={{ backgroundImage: `url(${project.thumbnail})` }}
            whileHover={{ scale: 1.05 }}
          >
            <ProjectInfo className="project-info">
              <Button onClick={() => handleDetailClick(project)}>Detail</Button>
              <div>{project.name}</div>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectContainer>
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
