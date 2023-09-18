import { render } from "@testing-library/react";
import ProductList from "./ProductList";

const products = [
  { name: "test1", environmentalScore: 2 },
  { name: "test2", environmentalScore: 5 },
];

describe("ProductList Test Suites", () => {
  test("renders learn react link", () => {
    const { getByText } = render(<ProductList products={[]} />);
    const expected = "Result Not Found";
    const result = getByText(expected);
    expect(result).toBeTruthy();
  });

  test("render 2 products", () => {
    const { getByText } = render(<ProductList products={products} />);

    const result1 = getByText("test1");
    const result2 = getByText("test2");

    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });
});
