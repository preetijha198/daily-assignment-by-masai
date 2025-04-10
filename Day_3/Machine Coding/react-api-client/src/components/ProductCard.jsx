export default function ProductCard({ product }) {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ₹{product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
    );
  }
  