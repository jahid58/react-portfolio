import React, { useEffect, useState } from "react";
import { projectsData } from "../../projectsData";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <div className="projects__container text-center">
        <div className="text">
          <h1>Projects</h1>
          <h5></h5>
        </div>
        <div className="row">
          {projects.length &&
            projects.map((project) => <Project project={project}></Project>)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
