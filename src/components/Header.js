import React from "react";
import "./Header.css";

import f2Icon from "../Assets/f2-1.png.png"; // Ensure file name is correct

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Essential Vitamins</h1>
        <div>
          <p className="subheading">Online Medical Supplies</p>
          <p className="description" style={{ color: "#193f51" }}>
            Get Your Vitamins & Minerals
          </p>
          <button className="cta-button">Explore</button>
        </div>
        <div className="header-image">
          <img
            src={f2Icon} // Using the imported image
            alt="Probiotics Bottle"
            className="main-product"
          />
        </div>

        <div className="product-icons" style={{ display: "flex", flexDirection: "column" }}>
          <div className="icon-item" style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="/assets/vitamins-icon.png"
              alt="Vitamins Icon"
              className="icon"
            />
            <h3 style={{ color: "#193f51" }}>Vitamins</h3>
            <p>Increased Vitamins and minerals in your diet</p>
          </div>
          <div className="icon-item" style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="/assets/weight-loss-icon.png"
              alt="Weight Loss Icon"
              className="icon"
            />
            <h3 style={{ color: "#193f51" }}>Weight Loss</h3>
            <p>Find scientifically proven solutions</p>
          </div>
          <div className="icon-item" style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="/assets/functional-foods-icon.png"
              alt="Functional Foods Icon"
              className="icon"
            />
            <div className="text-content">
              <h3 style={{ color: "#193f51" }}>Functional Foods</h3>
              <p>Functional foods</p>
              <p>From protein powders to baby formula</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
