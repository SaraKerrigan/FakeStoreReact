import React from "react";
import teamDesktop from "../assets/images/team-desktop.jpeg";
import teamHandDesktop from "../assets/images/team-hand-desktop.png";
import teamPhoto1 from "../assets/images/team-photo1.jpeg";
import teamPhoto2 from "../assets/images/team-photo2.jpeg";
import teamPhoto3 from "../assets/images/team-photo3.jpeg";

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <div className="team__items">
          <div className="team__images">
            <img className="team__items-img-picture" src={teamDesktop} alt="" />
            <img
              className="team__items-img-hand"
              src={teamHandDesktop}
              alt=""
            />
          </div>

          <div className="team__item">
            <h2 className="team__item-title">Наша команда</h2>
            <p className="team__item-text">
              Значимость этих проблем настолько очевидна, что базовый вектор
              развития позволяет оценить значение экспериментов, поражающих
              по своей масштабности и грандиозности. Мы вынуждены отталкиваться
              от того, что консультация с широким активом.
            </p>
            <div className="team__item-icons">
              <img className="team__item-icon-img" src={teamPhoto1} alt="" />
              <img className="team__item-icon-img" src={teamPhoto2} alt="" />
              <img className="team__item-icon-img" src={teamPhoto3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
