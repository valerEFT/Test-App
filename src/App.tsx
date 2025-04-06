import "./scss/styles.css";
import { HashRouter, Routes, Route } from "react-router";
import Products from "./components/Products";
import { SelectedProduct } from "./components/SelectedProduct";
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SelectedProduct />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
