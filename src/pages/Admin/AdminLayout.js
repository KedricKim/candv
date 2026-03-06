import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./Admin.css";

const MENU_LIST = [
  { key: "dashboard", label: "대시보드", path: "/admin" },
  {
    key: "productDetail",
    label: "제품 상세 관리",
    path: "/admin/product-detail",
  },
];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedMenu =
    [...MENU_LIST]
      .reverse()
      .find((m) => location.pathname.startsWith(m.path)) || MENU_LIST[0];

  const handleMenuClick = (menu) => {
    navigate(menu.path);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="sidebar-title">관리자 메뉴</div>
        <ul>
          {MENU_LIST.map((menu) => (
            <li
              key={menu.key}
              className={selectedMenu.key === menu.key ? "active" : ""}
              onClick={() => handleMenuClick(menu)}
            >
              {menu.label}
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <button className="admin-logout-btn" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </aside>
      <section className="admin-main">
        <div className="admin-header">
          <span>{selectedMenu.label}</span>
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AdminLayout;
