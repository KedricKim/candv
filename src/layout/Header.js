import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router";

var slideIndex = 0;

const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1]?.classList.add("active");

  setTimeout(showSlides, 3000);
};

const Header = () => {
  useEffect(() => {
    showSlides();
  }, []);

  return (
    <header className="header">
      <img src="/logo.png" alt="logo" />
      <div>
        <div className="address whitespace-normal">
          서울시 은평구 진관동 은평뉴타운 우물골아파트 225동 101호<br></br>
          <small>전화 : 031 - 782 - 9165/6 팩스 : 031 - 782 - 9167</small>
          <br></br>
          <small>E-mail : candvco@naver.com</small>
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
            <Link to="/video">
              <li>참고 영상</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
