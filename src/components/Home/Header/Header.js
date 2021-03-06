import React from "react";
import "./Header.css";
import headerImg from "../../../images/header-image.png";
import resume from "./file-sample.pdf";
import { Button } from "react-bootstrap";
import { GrLinkedin } from "react-icons/gr";
import { GoArrowDown, GoMarkGithub } from "react-icons/go";
import Typical from "react-typical";
const Header = () => {
  return (
    <div className="header__body">
      <div className="homePage__header row">
        <div className="header_content p-5 m-auto col-md-7 ">
          <h1>Hi! I'm Jahid Hasan</h1>
          <h2>
            {" "}
            <Typical
              steps={["A passionate", 400, "Web Developer", 2000]}
              loop={Infinity}
              wrapper="p"
            />
          </h2>
          <p>
            Always try to grab the new features of technology. Acquired to
            maintain strong interpersonal relationships with teammates. I am
            passionate about providing care to my work, which keeps me motivated
            and excited about doing my best work
          </p>
          <a href={resume} download>
            <Button>
              <GoArrowDown />
              Download Resume
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/jahid-hasan-876578203/">
            <Button>
              <GrLinkedin /> Linkedin
            </Button>
          </a>
          <a href="https://github.com/jahid58">
            <Button>
              <GoMarkGithub /> Github
            </Button>
          </a>
        </div>
        <div className="col-md-5 header__img">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
