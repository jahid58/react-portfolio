import React from "react";
import "./About.css";

import jahid from "../../images/jahid_hasan-removebg-preview.png";
import Skill from "../Skill/Skill";

const About = () => {
  return (
    <main>
      <div className="large__text">
        <h1 className="about__me">About Me</h1>
        <h3 className="intro ">Let me introduce...</h3>
      </div>
      <div className="row my-5 about__header">
        <div className=" col-md-5">
          <h4 className="text-white m-2"> Skills</h4>
          <Skill></Skill>
        </div>
        <div className="col-md-6 p-1 mx-auto description">
          <p>
            Expert in developing Single Page Aplication(SPA) using React and
            Node.js. I've a good knowledge in Javascript, ES6, Bootstap-4 and
            also comfortable with Material UI, Express.js and MongoDB. Client
            stisfaction is my pride. Love to develop modern and impressive
            websites for my clients and always responsible for the job.
          </p>
          <div className="row">
            <div className="col-md-6 text-left about__info">
              <div className="info__box">
                <h3>Personal Info</h3>
                <p>
                  •<strong> Name</strong> : jahid hasan <br />•{" "}
                  <strong>DoB</strong> : 1st Jan 1999 <br />•{" "}
                  <strong>Nationality</strong> : Bangladeshi <br />•{" "}
                  <strong> Blood Group</strong> : o+
                  <br />• <strong> Religion</strong> : Islam <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-6 text-left about__info">
              <div className="info__box">
                <h3>Education</h3>
                <p>
                  • <strong> Bachelor of Science (Honours)</strong>
                  <br />• <strong>Institute:</strong> Govt. Titumir College{" "}
                  <br />• <strong>Subject:</strong> Physics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
