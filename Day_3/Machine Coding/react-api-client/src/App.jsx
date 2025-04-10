import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Products</Link> | <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}
