import React from "react";
import logo from "../assets/images/logo.svg";
import closeMenu from "../assets/images/close-menu.svg";

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-logo">
        <img className="mobile-menu-img" src={logo} alt="" />
      </div>
      <div className="mobile-menu-items">
        <a className="mobile-menu-item-link" href="">
          <img className="mobile-menu-item-img" src={closeMenu} alt="" />
        </a>
        <a className="mobile-menu-item" href="">
          Репродукции
        </a>
        <a className="mobile-menu-item" href="">
          Новинки
        </a>
        <a className="mobile-menu-item" href="">
          О нас
        </a>
      </div>
    </div>
  );
}
