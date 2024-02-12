import React from "react";
import "./about.css";
import My_Photo from "../../assets/me.jpg";
import CV from "../../assets/CV.pdf";

// import AboutBox from "./aboutBox";

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={My_Photo} alt="" className="about__photo" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Self-motivated Frontend Developer adds beginner experience over
              one year of collaborating and working on multiple web-based
              projects. Passionate, hardworking coder with a penchant for
              developing customized interfaces that factor in unique demands for
              accessibility, reachability, and security. Organized approach to
              meeting multiple, concurrent deadlines. Pulls from active
              knowledge of the current technology landscape to promote best
              practices in web design.
            </p>
            <a download="" href={CV} className="btn">
              Download CV
              <i
                className="icon-paper-clip"
                style={{ paddingLeft: "10px", fontWeight: "bold" }}
              ></i>
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
                <span className="skills__number">30%</span>
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

      {/* <AboutBox /> */}
    </section>
  );
}
