import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { VscHeart } from "react-icons/vsc";
import Button from "react-bootstrap/Button";
import { VscAccount } from "react-icons/vsc";
import { IoLogoNodejs } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { IoAddCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header_logo">
            <IoLogoNodejs />
          </Link>
          <div className="header__nav">
            <Link className="header__nav-link" to="/">
              Home
            </Link>
            <Link className="header__nav-link" to="">
              Отзыв
            </Link>
            <Link>
              <select className="header__btn" name="" id="">
                <option value="">Apple</option>
                <option value="">Mi</option>
                <option value="">Samsung</option>
                <option value="">Honor</option>
                <option value="">Poco</option>
                <option value="">Huawei</option>
                <option value="">Oppo</option>
              </select>
            </Link>
            <Link className="header__nav-link">О нас</Link>
          </div>
          <div className="header__block3">
            <Link to={"/loit"} className="header__block3-btn">
              <VscHeart />
            </Link>
            <div className="header__block3-btn">
              <TiShoppingCart />
            </div>
            <Link to="/category" className="header__block3-btn">
              <IoAddCircleOutline />
            </Link>
            <div className="header__block3-btn">
              <VscAccount />
            </div>
          </div>
        </div>
        <div className="header__boc">
          <div className="header__logo-logo">
            <IoLogoNodejs />
          </div>
          <h1>A-21</h1>
        </div>
        <div className="header__buttons">
          <Button variant="primary">USA</Button>
          <Button variant="outline-success">China</Button>
          <Button variant="outline-warning">Japan</Button>
          <Button variant="outline-danger">Korea</Button>
          <Button variant="outline-info">Russia</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;


