import React from "react";
import "../style/form.scss";

const Form = ({ categories }) => {
  return (
    <div className="form-container">
      <form>
        <h3>Add Product</h3>
        <select placeholder="Kitap Kategorisi:" id="kategori">
          <option>Select Category</option>
          {categories.map((category) => (
            <option>{category.categoryName}</option>
          ))}
        </select>
        <input type="text" placeholder="Product Name" id="productName" />
        <input
          type="text"
          placeholder="Quantity Per Unit"
          id="quantityPerUnit"
        />

        <input type="text" placeholder="Unit Price" id="unitPrice" />
        <input type="text" id="unitsInStock" placeholder="Units In Stock" />

        <button>Ekle</button>
      </form>
    </div>
  );
};

export default Form;
