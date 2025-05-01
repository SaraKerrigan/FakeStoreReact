import React from "react";
import star from "../assets/images/star.svg";
import infoDesctop from "../assets/images/info-desctop.jpeg";

export default function Info() {
  return (
    <section
      className="info"
      style={{ backgroundImage: `url(${infoDesctop})` }}
    >
      <div className="container">
        <div className="info__title">
          <img className="info__title-img" src={star} alt="" />
          <h2 className="info__title-text">
            Новая коллекция французских авторов
          </h2>
        </div>
        <p className="info__text">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к
          новым свершениям, которые, в свою очередь, должны быть заблокированы в
          рамках своих собственных рациональных ограничений. Принимая во
          внимание показатели успешности, граница обучения кадров предопределяет
          высокую востребованность направлений прогрессивного развития.
        </p>
        <button className="info__btn">Ознакомиться</button>
      </div>
    </section>
  );
}
