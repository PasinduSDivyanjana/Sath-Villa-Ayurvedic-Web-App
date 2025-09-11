import React from "react";
import "../View Products/product.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Product({ product, onDelete }) {
  const {
    p_name,
    p_image,
    p_description,
    p_price,
    p_quantity,
    p_catogory,
    _id,
  } = product;

  const deleteHandler = async () => {
    if (window.confirm("⚠️ Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/products/${_id}`);
        alert("✅ Product deleted successfully!");
        if (onDelete) onDelete(_id); // trigger parent refresh
      } catch (err) {
        console.error(err);
        alert("❌ Failed to delete product");
      }
    }
  };

  return (
    <div className="product-card">
      {/* Image */}
      <img
        src={`http://localhost:5000${p_image}`} // make sure backend serves uploads
        alt={p_name}
        className="product-image"
        onError={(e) => (e.target.src = "/fallback.png")} // fallback if image missing
      />

      {/* Content */}
      <div className="product-details">
        <h2 className="product-name">{p_name}</h2>
        <p className="product-category">{p_catogory}</p>
        <p className="product-description">{p_description}</p>

        <div className="product-meta">
          <span className="product-price">Rs. {p_price.toFixed(2)}</span>
          <span
            className={`product-stock ${
              p_quantity > 0 ? "in-stock" : "out-stock"
            }`}
          >
            {p_quantity > 0 ? `In Stock (${p_quantity})` : "Out of Stock"}
          </span>
        </div>

        {/* Buttons */}
        <div className="product-actions">
          <Link to={`/products/${_id}`}>
            <button className="btn update-btn">Update</button>
          </Link>
          <button className="btn delete-btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
