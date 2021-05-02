import React, { useState, useEffect } from "react";
import Progress from "./Progress";

const Skill = () => {
  const allSkill = [
    { id: "01", skillType: "web", skill: "HTML", expertLevel: 95 },

    { id: "02", skillType: "web", skill: "React", expertLevel: 80 },
    { id: "03", skillType: "web", skill: "Redux", expertLevel: 80 },
    { id: "04", skillType: "web", skill: "Node.JS", expertLevel: 80 },
    { id: "05", skillType: "web", skill: "Express.JS", expertLevel: 70 },
    { id: "06", skillType: "web", skill: "MongoDB", expertLevel: 80 },
    { id: "08", skillType: "web", skill: "Meterial-UI", expertLevel: 85 },
    { id: "09", skillType: "web", skill: "Bootstrap", expertLevel: 85 },
    { id: "10", skillType: "tools", skill: "Figma", expertLevel: 90 },
    { id: "11", skillType: "web", skill: "React Bootstrap", expertLevel: 95 },
    { id: "12", skillType: "web", skill: "CSS", expertLevel: 95 },

    {
      id: "13",
      skillType: "programming",
      skill: "JavaScript",
      expertLevel: 80,
    },

    { id: "14", skillType: "tools", skill: "Git", expertLevel: 85 },
    { id: "15", skillType: "tools", skill: "Firebase", expertLevel: 80 },
    { id: "16", skillType: "tools", skill: "Netlify", expertLevel: 85 },
    { id: "17", skillType: "tools", skill: "Heroku", expertLevel: 90 },
    { id: "18", skillType: "tools", skill: "Web Pack", expertLevel: 90 },
    { id: "19", skillType: "tools", skill: "VSCode", expertLevel: 95 },
    { id: "20", skillType: "tools", skill: "Dev Tool", expertLevel: 90 },
    { id: "21", skillType: "tools", skill: "Photoshop", expertLevel: 80 },

    { id: "22", skillType: "tools", skill: "Adobe XD", expertLevel: 80 },
  ];

  const [getSkill, setGetSkill] = useState([]);
  const [webStyle, setWebStyle] = useState(true);
  const [progStyle, setProgStyle] = useState(false);
  const [toolsStyle, setToolsStyle] = useState(false);

  useEffect(() => {
    const specificSkill = allSkill.filter((skill) => skill.skillType === "web");
    setGetSkill(specificSkill);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleWeb = () => {
    const specificSkill = allSkill.filter((skill) => skill.skillType === "web");
    setGetSkill(specificSkill);

    setWebStyle(true);
    setProgStyle(false);
    setToolsStyle(false);
  };

  const handleProgramming = () => {
    const specificSkill = allSkill.filter(
      (skill) => skill.skillType === "programming"
    );
    setGetSkill(specificSkill);

    setWebStyle(false);
    setProgStyle(true);
    setToolsStyle(false);
  };

  const handleTools = () => {
    const specificSkill = allSkill.filter(
      (skill) => skill.skillType === "tools"
    );
    setGetSkill(specificSkill);

    setWebStyle(false);
    setProgStyle(false);
    setToolsStyle(true);
  };

  return (
    <div id="skill-section" className="container skill">
      <button
        onClick={handleWeb}
        className={
          webStyle
            ? "btn btn-success my-2 my-sm-0 btn-style"
            : "btn btn-outline-success my-2 my-sm-0 btn-style"
        }
      >
        Web
      </button>
      <button
        onClick={handleProgramming}
        className={
          progStyle
            ? "btn btn-success my-2 my-sm-0 btn-style"
            : "btn btn-outline-success my-2 my-sm-0 btn-style"
        }
      >
        Programming
      </button>
      <button
        onClick={handleTools}
        className={
          toolsStyle
            ? "btn btn-success my-2 my-sm-0 btn-style"
            : "btn btn-outline-success my-2 my-sm-0 btn-style"
        }
      >
        Tools
      </button>

      <div className="row">
        {getSkill.map((skill) => (
          <Progress
            key={skill.id}
            done={skill.expertLevel}
            title={skill.skill}
          ></Progress>
        ))}
      </div>
    </div>
  );
};

export default Skill;
