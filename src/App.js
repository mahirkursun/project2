import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./style/app.scss";

import {data} from "./data/data";

function App() {


  return (
    <div className="app">
      <Navbar categories={data.categories}/>
      
      <div className="container">
        <Sidebar categories={data.categories} />
        <Content products={data.products}  />
      </div>
    </div>
  );
}

export default App;
