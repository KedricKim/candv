import React from "react";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" />
      <div>
        <div className="address">
          경기도 성남시 분당구 구미동 165 분당 포스빌 523호<br></br>
          전화 : 031 - 782 - 9165/6 <br></br>팩스 : 031 - 782 - 9167
        </div>
        <nav>
          <ul>
            <Link to="/">
              <li>홈</li>
            </Link>
            <Link to="/about">
              <li>회사소개</li>
            </Link>
            <Link to="/product">
              <li>제품소개</li>
            </Link>
            <Link to="/estimate">
              <li>온라인 견적</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
