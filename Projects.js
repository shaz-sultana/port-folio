import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      title: "Project 1",
      description: "This is a description of project 1.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "This is a description of project 2.",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
