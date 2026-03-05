import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Estimate from "./pages/Estimate";
import ProductDetail from "./pages/Product/ProductDetail";
import Video from "./pages/Video";
import ProductList from "./pages/Product/ProductList";
import NoLayout from "./layout/NoLayout";
import Login from "./pages/Login";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProductDetail from "./pages/Admin/ProductDetail";
import AdminRoute from "./pages/Admin/AdminRoute";
import SEOMetaTag from "./SEOMetaTag";

const App = () => {
  return (
    <Routes>
      {/* 헤더/푸터 없는 레이아웃 그룹 */}
      <Route element={<NoLayout />}>
        <Route path="/login" element={<Login />} />
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="product-detail" element={<AdminProductDetail />} />
          </Route>
        </Route>
      </Route>
      {/* 기본 레이아웃 그룹 */}
      <Route
        element={
          <div className="app pt-[131px] pb-5">
            <SEOMetaTag />
            <Header />
            <main className="content pt-5">
              <Outlet />
            </main>
            <Footer />
          </div>
        }
      >
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
      </Route>
    </Routes>
  );
};
export default App;
