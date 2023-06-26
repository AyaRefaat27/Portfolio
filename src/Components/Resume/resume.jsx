import React from "react";
import "./resume.css";
import Data from "./data";
import ResumeCard from "./resumeCard";

export default function Resume() {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((value, id) => {
            if (value.category === "education") {
              return (
                <ResumeCard
                  key={id}
                  icon={value.icon}
                  title={value.title}
                  year={value.year}
                  desc={value.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((value, id) => {
            if (value.category === "experience") {
              return (
                <ResumeCard
                  key={id}
                  icon={value.icon}
                  title={value.title}
                  year={value.year}
                  desc={value.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
