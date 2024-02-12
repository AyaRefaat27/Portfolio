import React from "react";
import "./skills.css";

const skills = [
  {
    id: 1,
    skill: "HTML",
  },

  {
    id: 2,
    skill: "HTML5",
  },
  {
    id: 3,
    skill: "CSS",
  },
  {
    id: 4,
    skill: "CSS3",
  },
  {
    id: 5,
    skill: "JavaScript",
  },
  {
    id: 6,
    skill: "EcmaScript-6 'ES6'",
  },
  {
    id: 7,
    skill: "React.js",
  },
  {
    id: 8,
    skill: "Node.js",
  },
  {
    id: 9,
    skill: "Git & Github",
  },
  {
    id: 10,
    skill: "Redux Toolkits",
  },
  {
    id: 11,
    skill: "React Native",
  },
  {
    id: 12,
    skill: "Responsive Web Design",
  },
  {
    id: 13,
    skill: "Data Structure",
  },
  {
    id: 14,
    skill: "Algorithm",
  },
  {
    id: 15,
    skill: "OOP",
  },
];

const tools = [
  {
    id: 1,
    tool: "VS Code",
  },

  {
    id: 2,
    tool: "Figma",
  },
  {
    id: 3,
    tool: "Postman",
  },
  {
    id: 4,
    tool: "MongoDB",
  },
];
export default function Skills() {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title"> Skills</h2>

      <div className="sub__skill">
        <h4 className="skill__title">
          <i
            class="fa-solid fa-code"
            style={{ color: "hsl(334, 83%, 58%)", marginRight: "10px" }}
          ></i>
          Technical Skills
        </h4>
        <div className="skills__container">
          {skills.map(({ id, skill }) => {
            return (
              <div className="skill__item" key={id}>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sub__skill">
        <h4 className="skill__title">
          <i
            class="fa-solid fa-gear"
            style={{ color: "hsl(334, 83%, 58%)", marginRight: "10px" }}
          ></i>
          Tools
        </h4>
        <div className="skills__container">
          {tools.map(({ id, tool }) => {
            return (
              <div className="skill__item" key={id}>
                <p>{tool}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
