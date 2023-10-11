import React from "react";
import "../style/side.scss";

const Sidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setFilteredProducts,
}) => {
  return (
    <aside>
      <div className="side">
        <h2 onClick={()=>setFilteredProducts(null)}>Categories</h2>
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
            {/* <li onClick={e=>setCurrentCategory(e.target.innerText)}>{category.categoryName}</li> */}
          </ul>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
