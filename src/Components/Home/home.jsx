import React from "react";
import "./home.css";
import Personal_Photo from "../../assets/aya.jpg";
import Socials from "./socials";
import ScrollDown from "./scrollDown";

export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Personal_Photo} alt="" className="home__img" />
        <h1 className="home__name">Aya Refaat</h1>
        <span className="home__education">I am a Front-End Developer</span>

        <Socials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
}
