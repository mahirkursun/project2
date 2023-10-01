import React from "react";
import "../style/side.scss";

const Sidebar = ({ categories,setCurrentCategory }) => {
  return (
    <aside>
      <div className="side">
        <h2>Categories</h2>
        {categories.map((category) => (
     
          <ul key={category.id}>
            {/* <li onClick={()=>setCurrentCategory(category.categoryName)}>{category.categoryName}</li> */}
            <li onClick={e=>setCurrentCategory(e.target.innerText)}>{category.categoryName}</li>
          
          </ul>
      
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
