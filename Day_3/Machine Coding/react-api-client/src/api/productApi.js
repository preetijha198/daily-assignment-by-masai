const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = async (filters) => {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${BASE_URL}?${query}`);
  return res.json();
};
