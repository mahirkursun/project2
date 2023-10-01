import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./style/app.scss";

import {data} from "./data/data";
import { useState } from "react";

function App() {
const [currentCategory, setCurrentCategory]=useState("");

  
  return (
    <div className="app">
      <Navbar categories={data.categories}/>
      
      <div className="container">
        <Sidebar setCurrentCategory={setCurrentCategory} categories={data.categories} />
        <Content currentCategory={currentCategory} products={data.products}  />
      </div>
    </div>
  );
}

export default App;
