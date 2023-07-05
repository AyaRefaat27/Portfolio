import React from "react";
import "./services.css";

import Image1 from "../../assets/web_design.png";
import Image2 from "../../assets/ui_design.png";
import Image3 from "../../assets/presentation.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusantium in laboriosam neque dolorem praesentium id!",
  },
  {
    id: 2,
    image: Image2,
    title: "UI/UX Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusantium in laboriosam neque dolorem praesentium id!",
  },
  {
    id: 3,
    image: Image3,
    title: "Presentation",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusantium in laboriosam neque dolorem praesentium id!",
  },
];
export default function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
