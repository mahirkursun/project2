import React from "react";
import "../style/nav.scss";
import logo from "../images/logo.png";

const Navbar = ({
  categories,
  currentCategory,
  setCurrentCategory,
  setCurrentCategoryId,
}) => {
  return (
    <nav>
      <div className="logo">
        <img
          onClick={() => {
            setCurrentCategory("");
            setCurrentCategoryId("");
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
                currentCategory === category.categoryName ? "active" : ""
              }
              onClick={() => {
                setCurrentCategory(category.categoryName);
                setCurrentCategoryId(category.id);
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
