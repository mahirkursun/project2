
import { useEffect } from "react";
import "../style/content.scss";

const Content = ({ products, currentCategory, currentCategoryId,filteredProducts ,setFilteredProducts}) => {


  const filterProducts = () => {
    if (currentCategory === "") {
      setFilteredProducts("");
    } else {
      const filtered = products.filter(
        (product) => product.categoryId === currentCategoryId
      );
      setFilteredProducts(filtered);
    }
  };


  useEffect(() => {
    filterProducts();
  }, [currentCategory, currentCategoryId]);


  return (
    <div className="content">
      <h3>Product List - {currentCategory}</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price($)</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {(filteredProducts === "" ? products : filteredProducts).map(
            (product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
