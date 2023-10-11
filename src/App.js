import axios from "axios";
import Content from "./components/Content";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./style/app.scss";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    
    if (!selectedProduct) {
      //ürün ekleme  
      const response = await axios.post(url, newProduct);
      if (response.status === 201) {
        
        await setProducts((prev) => [...prev, newProduct]);
        toast.success("Ürün Eklendi", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } else {
      toast.info("Ürün Güncellendi", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      //ürün düzenle
      url += `/${selectedProduct.id}`;
      await axios.put(url, newProduct);
      setSelectedProduct(null);
    }
    
  };

  const getProduct = async (id) => {
    let url = `http://localhost:3005/products/${id}`;
    const response = await axios.get(url);
    setSelectedProduct(response.data);
   
  };

  const deleteProduct = async (id) => {
    let url = `http://localhost:3005/products/${id}`;
    const response = await axios.patch(url, { isDeleted: true });
    if (response.status === 200) {
      toast.error("Ürün Silindi", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setProducts((prev) =>
        prev.filter((statedenGelen) => statedenGelen.id !== id)
      );
      
    }
    
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, [selectedCategory, selectedProduct]);

  return (
    <div className="app">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        setFilteredProducts={setFilteredProducts}
      />

      <div className="container">
        <div className="left-container">
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setFilteredProducts={setFilteredProducts}
            categories={categories}
          />
          <Form
            setProducts={setProducts}
            products={products}
            categories={categories}
            addEditProduct={addEditProduct}
            selectedProduct={selectedProduct}
          />
        </div>

        <Content
          selectedCategory={selectedCategory}
          products={
            filteredProducts !== null
              ? products.filter(
                  (product) => product.categoryId === filteredProducts
                )
              : products
          }
          getProduct={getProduct}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}

export default App;
