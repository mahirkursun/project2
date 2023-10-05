import Content from "./components/Content";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./style/app.scss";

import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getData = async () => {
    let url = "http://localhost:3005/data/";
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
    setCategories(data.categories);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Navbar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={categories}
        setFilteredProducts={setFilteredProducts}
      />

      <div className="container">
        <div className="left-container">
          <Sidebar
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            setFilteredProducts={setFilteredProducts}
            categories={categories}
          />
          <Form
            setProducts={setProducts}
            products={products}
            categories={categories}
          />
        </div>

        <Content
          currentCategory={currentCategory}
          products={
            filteredProducts !== null
              ? products.filter(
                  (product) => product.categoryId === filteredProducts
                )
              : products
          }
        />
      </div>
    </div>
  );
}

export default App;
