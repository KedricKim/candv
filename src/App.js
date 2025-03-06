import React from "react";
import { Routes, Route } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Estimate from "./pages/Estimate";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import Video from "./pages/Video";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/product/detail/:productName"
            element={<ProductDetail />}
          />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
