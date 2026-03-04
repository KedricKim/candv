import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Estimate from "./pages/Estimate";
import ProductDetail from "./pages/Product/ProductDetail";
import Video from "./pages/Video";
import ProductList from "./pages/Product/ProductList";
import SEOMetaTag from "./SEOMetaTag";

const App = () => {
  return (
    <div className="app pt-[131px] pb-5">
      <SEOMetaTag />
      <Header />
      <main className="content pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route
            path="/product/detail/:productName"
            element={<ProductDetail />}
          />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/video" element={<Video />} />
          {/* 404 페이지 처리 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
