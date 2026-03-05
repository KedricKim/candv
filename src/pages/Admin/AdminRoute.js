import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // 세션스토리지에 토큰 또는 로그인 여부 저장 방식 사용
  return sessionStorage.getItem("isAdminLoggedIn") === "true";
};

const AdminRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
