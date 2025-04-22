import { render, fireEvent } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  localStorage.clear();
});

test("❤️ button updates localStorage", async () => {
  const { findByText } = render(<App />);
  const product = await findByText("Wireless Mouse");

  const button = product.parentNode.querySelector("button");
  fireEvent.click(button);

  const favs = JSON.parse(localStorage.getItem("productFavs"));
  expect(favs).toContain(1);
});
