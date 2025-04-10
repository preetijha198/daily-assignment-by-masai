import { useState } from "react";

export default function FilterBar({ onFilter }) {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ category, minPrice, maxPrice, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input placeholder="Min Price" type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      <input placeholder="Max Price" type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      <input placeholder="Rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button type="submit">Apply Filters</button>
    </form>
  );
}
