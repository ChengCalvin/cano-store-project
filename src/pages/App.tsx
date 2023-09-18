import { ChangeEvent, useRef, useState } from "react";
import "./App.css";
import SearchBar from "../components/SearchBar";
import ProductList from "../containers/ProductList";
import mockProducts from "../mock-data/products";
import { sortProduct } from "../utils/productSort";

function App() {
  const searchBarRef = useRef<string>("");
  const [products, setProducts] = useState(mockProducts);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchBarRef.current = event.target.value;
  };

  const onSearchClick = () => {
    const filteredProducts = searchBarRef.current
      ? mockProducts.filter((product) =>
          product.name
            .toLowerCase()
            .includes(searchBarRef.current.toLowerCase())
        )
      : mockProducts;
    setProducts(filteredProducts);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Store</h1>
      </header>
      <div className="app-body">
        <div className="search-controls-container">
          <SearchBar onChange={onInputChange} />
          <button onClick={onSearchClick}>
            Search
          </button>
          <button onClick={() => setProducts((sortProduct(products, true)))}>Sort Ascending</button>
          <button onClick={() => setProducts((sortProduct(products, false)))}>Sort Descending</button>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
