import React from "react";

const ProductCard = ({ product, isFav, toggleFav }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => toggleFav(product.id)}>
        {isFav ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default ProductCard;
