import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Product from "../View Products/Product";

const URL = "http://localhost:5000/products";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.products));
  }, []);

  // handle product delete (remove from state without reload)
  const handleDelete = (deletedId) => {
    setProducts((prev) => prev.filter((p) => p._id !== deletedId));
  };

  return (
    <div>
      <Nav />
      <div className="products-page">
        <h1 className="page-title">Our Ayurvedic Products</h1>

        <div className="products-grid">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Product key={product._id} product={product} onDelete={handleDelete} />
            ))
          ) : (
            <p className="no-products">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
