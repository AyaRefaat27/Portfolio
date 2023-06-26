import React from "react";
import "./about.css";
import My_Photo from "../../assets/me.jpg";
import AboutBox from "./aboutBox";

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={My_Photo} alt="" className="about__photo" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              As a junior frontend developer with a passion for web development
              and a commitment to producing high-quality work, I believe that I
              would be an excellent fit for any team I will join.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            {/* skill one */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number "> 80% </span>
              </div>

              <div className="skills__bar">
                <span className="skills__persentage development"></span>
              </div>
            </div>

            {/* skill two */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__persentage ui__design"></span>
              </div>
            </div>

            {/* skill three */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Presentation</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__persentage present"></span>
              </div>
            </div>
            {/* end skills */}
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}
