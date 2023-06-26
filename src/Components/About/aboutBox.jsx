import React from "react";
import "./about.css";

export default function AboutBox() {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">10</h3>
          <span className="about__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">200</h3>
          <span className="about__subtitle">Cup of Cofee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">10</h3>
          <span className="about__subtitle">Saticfied Clients</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">35</h3>
          <span className="about__subtitle">Nominess Winner</span>
        </div>
      </div>
    </div>
  );
}
