import React from "react";
import logo from "../assets/images/logo.svg";
import social1 from "../assets/images/social1.svg";
import social2 from "../assets/images/social2.svg";
import social3 from "../assets/images/social3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo">
            <a className="footer__logo-link" href="">
              <img src={logo} alt="" />
            </a>
            <a className="footer__logo-phone" href="tel:+79995435454">
              +7(999)543-54-54
            </a>
            <a className="footer__logo-text" href="">
              Мастерская
            </a>
          </div>
          <div className="footer__items">
            <div className="footer__item">
              <h3 className="footer__item-title">Репродукции</h3>
              <a className="footer__item-link" href="">
                Франция
              </a>
              <a className="footer__item-link" href="">
                Германия
              </a>
              <a className="footer__item-link" href="">
                Англия
              </a>
            </div>
            <div className="footer__item">
              <h3 className="footer__item-title">Новинки</h3>
              <a className="footer__item-link" href="">
                2021
              </a>
              <a className="footer__item-link" href="">
                2020
              </a>
            </div>
            <div className="footer__item">
              <h3 className="footer__item-title">О нас</h3>
              <a className="footer__item-link" href="">
                Художники
              </a>
              <a className="footer__item-link" href="">
                Менеджеры
              </a>
            </div>
          </div>
          <div className="footer__socials">
            <div className="footer__socials-items">
              <a className="footer__socials-item" href="">
                <img src={social1} alt="" />
              </a>
              <a className="footer__socials-item" href="">
                <img src={social2} alt="" />
              </a>
              <a className="footer__socials-item" href="">
                <img src={social3} alt="" />
              </a>
            </div>
            <a className="footer__socials-link" href="">
              Ink. House ®
            </a>
            <a className="footer__socials-link" href="">
              All rights reserved
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
