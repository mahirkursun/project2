import axios from "axios";
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

  const getProducts = async () => {
    let url = "http://localhost:3005/products";
    const response = await axios.get(url);
    setProducts(response.data);
  };
  const getCategories = async () => {
    let url = "http://localhost:3005/categories";
    const response = await axios.get(url);
    setCategories(response.data); 
  };

  const addEditProduct = async (newProduct) => {

    let url = "http://localhost:3005/products";

    
    const response = await axios.post(url, newProduct);
    if (response.status === 201) {
      await setProducts((prev) => [...prev, newProduct]);
    }
   
  };

  const deleteProduct = async (id) => {
    let url = `http://localhost:3005/products/${id}`;
    const response = await axios.patch(url, { isDeleted: true });
    if (response.status === 200) {
      setProducts((prev) =>
        prev.filter((statedenGelen) => statedenGelen.id !== id)
      );
    }
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
            addEditProduct={addEditProduct}
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
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}

export default App;
