import React from "react";
import "../style/nav.scss";
import logo from "../images/logo.png";

const Navbar = ({ categories, selectedCategory, setSelectedCategory ,setFilteredProducts}) => {
  return (
    <nav>
      <div className="logo">
        <img
          onClick={() => {
            setFilteredProducts(null)
          }}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="menu">
        {categories.map((category) => (
          <ul key={category.id}>
            <li
              className={
                selectedCategory === category.categoryName ? "active" : ""
              }
              onClick={() => {
                setSelectedCategory(category.categoryName);
                setFilteredProducts(category.id);
              }}
            >
              {category.categoryName}
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
