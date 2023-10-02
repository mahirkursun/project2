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
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const getProducts = async () => {
    let url = "http://localhost:3005/products";
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  };
  const getCategories = async () => {
    let url = "http://localhost:3005/categories";
    const response = await fetch(url);
    const categories = await response.json();
    setCategories(categories);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="app">
      <Navbar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        setCurrentCategoryId={setCurrentCategoryId}
        categories={categories}
      />

      <div className="container">
        <div className="left-container">
          <Sidebar
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            setCurrentCategoryId={setCurrentCategoryId}
            categories={categories}
          />
          <Form categories={categories}/>
        </div>

        <Content
          currentCategory={currentCategory}
          currentCategoryId={currentCategoryId}
          products={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </div>
  );
}

export default App;
