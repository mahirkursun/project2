import React from "react";
import "../style/side.scss";

const Sidebar = ({ categories }) => {
  return (
    <aside>
      <div className="side">
        <h2>Categories</h2>
        {categories.map((category) => (
          <ul key={category.id}>
            <li>{category.categoryName}</li>
          </ul>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
