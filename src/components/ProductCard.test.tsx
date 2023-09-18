import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("App Test Suites", () => {
  test("renders product card", () => {
    const { getByText } = render(
      <ProductCard productName={"test1"} productEnvironmentScore={4} />
    );
    const product = screen.getByText("test1");
    expect(product).toBeInTheDocument();
  });
});
