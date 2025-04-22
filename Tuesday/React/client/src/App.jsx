import { useState, useEffect, useMemo } from "react";
import useProducts from "./hooks/useProducts";
import ProductCard from "./components/ProductCard";
import "./App.css";

const App = () => {
  const products = useProducts();
  const [favs, setFavs] = useState(() => {
    const stored = localStorage.getItem("productFavs");
    return stored ? JSON.parse(stored) : [];
  });

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const toggleFav = (id) => {
    let updatedFavs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
    setFavs(updatedFavs);
    localStorage.setItem("productFavs", JSON.stringify(updatedFavs));
  };

  const filtered = useMemo(() => {
    let list = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "asc") list.sort((a, b) => a.price - b.price);
    if (sort === "desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [products, search, sort]);

  return (
    <div className="app">
      <header>
        <h1>🛍️ Products</h1>
        <span>❤️ {favs.length}</span>
      </header>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isFav={favs.includes(p.id)}
            toggleFav={toggleFav}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
