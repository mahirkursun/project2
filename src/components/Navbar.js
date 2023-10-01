import React from "react";
import "../style/nav.scss";
import logo from "../images/logo.png";

const Navbar = ({ categories }) => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        {categories.map((category) => (
          <ul key={category.id}>
            <li>{category.categoryName}</li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
