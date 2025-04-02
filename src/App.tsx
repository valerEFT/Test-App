import React from "react";
import "./scss/styles.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
