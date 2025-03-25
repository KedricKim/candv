import React from "react";
import { Link } from "react-router";

const ProductMain = () => {
  return (
    <>
      <tr style={{ height: "20px" }}>
        <td colSpan="4"></td>
      </tr>
      <tr style={{ textAlign: "left", fontWeight: "bold" }}>
        <td colSpan="4">
          <img src="/icon_arrow_blue.png" />
          &nbsp;
          <a>제품군</a>
        </td>
      </tr>
      <tr style={{ height: "20px" }}>
        <td colSpan="4"></td>
      </tr>
      <tr>
        <td>
          <Link to={`/product/list`}>
            <img
              src="/product/VP1500.png"
              alt="VP1000"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            파고계
          </Link>
        </td>
        <td>
          <Link to={`/product/list`}>
            <img
              src="/product/VP1500.png"
              alt="VP1500"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            유속계
          </Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link to={`/product/list`}>
            <img
              src="/product/VP1500.png"
              alt="VP1000"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            수위계
          </Link>
        </td>
        <td>
          <Link to={`/product/list`}>
            <img
              src="/product/VP1500.png"
              alt="VP1500"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            풍속계
          </Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link to={`/product/list`}>
            <img
              src="/product/VP1500.png"
              alt="VP1500"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            데이터 로거
          </Link>
        </td>
        <td>
          <Link to={`/product/list`}>
            <img
              src="/product/VP1500.png"
              alt="VP1000"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            제작 실험장치
          </Link>
        </td>
      </tr>

      <tr style={{ height: "30px" }}>
        <td colSpan="4"></td>
      </tr>
      <tr style={{ textAlign: "left", fontWeight: "bold" }}>
        <td colSpan="4">
          <img src="/icon_arrow_blue.png" />
          &nbsp;
          <a>Sites</a>
        </td>
      </tr>
      <tr style={{ textAlign: "left" }}>
        <td colSpan="4" className="homeUl">
          <ul>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" />
              &nbsp;
              <Link to="/about">회사소개</Link>
            </li>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" />
              &nbsp;
              <Link to="/estimate">온라인 견적</Link>
            </li>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" />
              &nbsp;
              <Link to="/video">참고 영상</Link>
            </li>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" />
              &nbsp;
              <a href="https://www.kenek-co.com/" target="_blank">
                KENEK Japan
              </a>
            </li>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" />
              &nbsp;
              <a
                href="https://www.kenek-co.com/english/index.html"
                target="_blank"
              >
                KENEK Engish
              </a>
            </li>
          </ul>
        </td>
      </tr>

      <tr style={{ height: "20px" }}>
        <td colSpan="4"></td>
      </tr>
      <tr>
        <td colSpan="4">
          <button>Tel : 031-782-9165</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>E-mail : candvco@naver.com</button>
        </td>
      </tr>
      <tr style={{ height: "20px" }}>
        <td colSpan="4"></td>
      </tr>
    </>
  );
};

export default ProductMain;
