import { Button } from "bootstrap";
import React from "react";
import { GoLink, GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { name, image, description, github, live } = props.project;
  return (
    <div className="col-md-4">
      <div className="project">
        <img src={image} alt=" this is image" />
        <div className="project__info">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="row  text-center">
            <div className="anchor col-md-6">
              <a href={live}>
                <GoLink /> Live{" "}
              </a>
            </div>
            <div className="anchor col-md-6">
              <a href={github}>
                <GoMarkGithub /> Github{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
