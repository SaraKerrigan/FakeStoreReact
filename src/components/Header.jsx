import React from "react";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/cart.svg";
import burger from "../assets/images/burger.svg";

export default function Header({ onOpen, cartCount }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__mob">
          <a className="header__mob-logo" href="">
            <img className="header__mob-logo-img" src={logo} alt="" />
          </a>
          <div className="header__mob-items">
            <a className="header__mob-menu" href="">
              <img className="header__mob-menu-img" src={burger} alt="" />
            </a>
            <a className="header__mob-cart" href="">
              <img className="header__mob-cart-img" src={cart} alt="" />
            </a>
          </div>
        </div>
        <div className="header__tablet">
          <a className="header__tablet-logo" href="">
            <img className="header__tablet-logo-img" src={logo} alt="" />
          </a>
          <nav className="header__tablet-links">
            <a className="header__tablet-link" href="">
              Репродукци
            </a>
            <a className="header__tablet-link" href="">
              Новинки
            </a>
            <a className="header__tablet-link" href="">
              О нас
            </a>
            <a className="header__tablet-link" href="">
              <img className="header__tablet-link-img" src={cart} alt="" />
            </a>
          </nav>
        </div>
        <div className="header__top">
          <a className="header__logo" href="">
            <img className="header__logo-img" src={logo} alt="logo" />
          </a>
          <nav className="header__links">
            <a className="header__link" href="">
              Репродукции
            </a>
            <a className="header__link" href="">
              Новинки
            </a>
            <a className="header__link" href="">
              О нас
            </a>
            <button className="header__link header__link-icon" onClick={onOpen}>
              <img className="header__link-img" src={cart} alt="" />
              {cartCount > 0 && (
                <span className="header__link-counter">{cartCount}</span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
