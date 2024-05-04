import React from "react";
import "./Footer.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__block">
            <div className="footer__btn">
              <IoLogoNodejs className="footer__logo" />
              <h1>A-21</h1>
            </div>
            <button className="footer__button">Оставить отзыв</button>
          </div>
          <div className="footer__block2">
            <h2>ОКЭ</h2>
            <div className="footer__box">
              <span>USA</span>
              <span>Japan</span>
              <span>Korea</span>
              <span>China</span>
              <span>Russia</span>
            </div>
          </div>
          <div className="footer__block3">
            <h2>Brand</h2>
            <div className="footer__box">
              <span>Mi</span>
              <span>Oppo</span>
              <span>Poco</span>
              <span>Honor</span>
              <span>Apple</span>
              <span>Huawei</span>
              <span>Samsung</span>
            </div>
          </div>
          <div>
            <h2>Время работы</h2>
            <div className="footer__block3">
              <span>Пн-Пт с 10:00 до 21:00</span>
              <span>Сб-Вс с 10:00 до 18:00</span>
            </div>
            <h2>Адрес</h2>
            <div className="footer__box">
              <span>Bishkek</span>
              <span>ТЦ: ЦУМ</span>
              <span>0 этаж G-32</span>
            </div>
          </div>
          <div className="footer__block4">
            <h2>Контакты</h2>
            <div className="footer__block4-btn">
              <div className="footer-bul">
                <IoLogoWhatsapp className="footer__bul-btn"/>
                <span>+1234567890</span>
              </div>
              <div className="footer-bul">
                <AiFillPhone className="footer__bul-btn"/>
                <span>+1234567890</span>
              </div>
              <div className="footer-bul">
                <AiFillPhone className="footer__bul-btn"/>
                <span>+1234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
