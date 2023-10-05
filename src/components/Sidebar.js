import React from "react";
import "../style/side.scss";

const Sidebar = ({
  categories,
  currentCategory,
  setCurrentCategory,
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
                currentCategory === category.categoryName ? "active" : ""
              }
              onClick={() => {
                setCurrentCategory(category.categoryName);

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
