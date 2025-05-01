import React from "react";
import tabletSmallImg from "../assets/images/tablet-small-img.jpeg";
import tabletBigImg from "../assets/images/tablet-big-img.jpeg";
import mainImg from "../assets/images/main-img.jpeg";

export default function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__items">
          <picture className="intro__pic">
            <source media="(max-width: 689px)" srcSet={tabletSmallImg} />
            <source media="(max-width: 992px)" srcSet={tabletBigImg} />
            <img className="intro__img" src={mainImg} alt="" />
          </picture>
          <div className="intro__item">
            <h1 className="intro__item-title">
              Реплики картин от <span>Ink. House</span>
            </h1>
            <p className="intro__item-text">
              Высокое качество отрисовки на плотной бумаге или льняном холсте.
              Редкие произведения, доступные цены.
            </p>
            <button className="intro__item-btn button">Продукция</button>
          </div>
        </div>
      </div>
    </section>
  );
}
