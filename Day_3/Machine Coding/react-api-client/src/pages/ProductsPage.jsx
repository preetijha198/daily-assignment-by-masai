import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ page: 1, limit: 6 });
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts(filters).then((data) => {
      setProducts(data.products);
      setTotalPages(data.totalPages);
    });
  }, [filters]);

  return (
    <div>
      <h2>Products</h2>
      <FilterBar onFilter={(newFilters) => setFilters({ ...filters, ...newFilters, page: 1 })} />
      <div>{products.map((p) => <ProductCard key={p._id} product={p} />)}</div>
      <Pagination currentPage={filters.page} totalPages={totalPages} onPageChange={(page) => setFilters(f => ({ ...f, page }))} />
    </div>
  );
}
