import "./scss/styles.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./components/Products";
import { SelectedProduct } from "./components/SelectedProduct";
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SelectedProduct />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
