import { Product } from "../mock-data/products"
import { sortProduct } from "./productSort"

const productTest: Product[] = [
    {name: "test1", environmentalScore: 3},
    {name: "test2", environmentalScore: 2},
    {name: "test3", environmentalScore: 1},
]

describe("testing sorting algorithm", () => {
    test("ascending sort", () => {
        const sortedProduct = sortProduct(productTest, true);
        expect(sortedProduct[0].environmentalScore).toBe(1);
        expect(sortedProduct[1].environmentalScore).toBe(2);
        expect(sortedProduct[2].environmentalScore).toBe(3);
    })

    test("descending sort", () => {
        const sortedProduct = sortProduct(productTest, false);
        expect(sortedProduct[0].environmentalScore).toBe(3);
        expect(sortedProduct[1].environmentalScore).toBe(2);
        expect(sortedProduct[2].environmentalScore).toBe(1);
    })
})