import React from "react";
import "./resume.css";
const work = [
  {
    id: 1,
    icon: "icon-briefcase",
    year: "Sep 2023 - Present",
    title: "Frontend Developer (Part-Time)",
    company: "Social Media Contact Center (Freelance)",
    desc1:
      "- Designed, developed, and implemented software applications for websites based on analyzed requirements and understanding of industry technical standards.",
    desc2:
      "- Tested programs and databases to identify issues and make necessary modifications.",
    desc3:
      "- Discussed issues with team members to provide resolution and apply best practices.",
  },
];
export default function WorkExperience() {
  return (
    <section className="work container section" id="work">
      <h2 className="section__title"> Work Experience</h2>

      <div>
        <div className="timeline grid">
          {work.map((value, id) => {
            return (
              <div className="timeline__item">
                <i className={value.icon}></i>
                <span className="timeline__date">{value.year}</span>
                <h3 className="timeline__title">{value.title}</h3>
                <div style={{ margin: "5px" }}>
                  <h4 style={{ color: "#333" }}> Company : {value.company}</h4>
                </div>
                <p className="timeline__text">{value.desc1}</p>
                <p className="timeline__text">{value.desc2}</p>
                <p className="timeline__text">{value.desc3}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
