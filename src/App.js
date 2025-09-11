//app.js eke call karana ewa vitharai display wenne
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Ayurveda from "./Component/Ayurveda/Ayurveda";
import Products from "./Component/View Products/Products";
import AddProduct from "./Component/Add Product/Add_Product";
import UpdateUser from "./Component/Update Product/Update_Product"
import Inquire from "./Component/Inquire/Inquire";
import About from "./Component/About Us/About";

function App() {
  //js
  return (
    //html body
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<UpdateUser />} />
          <Route path="/add_product" element={<AddProduct />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
