import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./work";

export default function Portfolio() {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((element) => {
      return element.category === categoryItem;
    });
    setItems(updateItems);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span
          className="work__item"
          onClick={() => {
            setItems(Menu);
          }}
        >
          All
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("Web Design");
          }}
        >
          {" "}
          Web Desig
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("UI/UX");
          }}
        >
          UI/UX
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("PowerPoint");
          }}
        >
          PowerPoint
        </span>
        <span
          className="work__item"
          onClick={() => {
            filterItem("Freelancing");
          }}
        >
          Freelancing
        </span>
      </div>

      <div className="work__container grid">
        {items.map((element) => {
          const { id, image, title, category } = element;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
