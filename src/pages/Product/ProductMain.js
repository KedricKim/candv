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
          <img src="/icon_arrow_blue.png" alt="arrow" />
          &nbsp;
          <a>제품군</a>
        </td>
      </tr>
      <tr style={{ height: "20px" }}>
        <td colSpan="4"></td>
      </tr>
      <tr>
        <td>
          <Link to={`/product/list?target=prod1`}>
            <img
              src="/product/VM-1001N.png"
              alt="VM-1001N 유속계"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            유속계
          </Link>
        </td>
        <td>
          <Link to={`/product/list?target=prod2`}>
            <img
              src="/product/CH-701E.png"
              alt="CH-701E 파고계"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            파고계
          </Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link to={`/product/list?target=prod3`}>
            <img
              src="/product/P306.png"
              alt="P306 초소형 압력계"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            초소형 압력계
          </Link>
        </td>
        <td>
          <Link to={`/product/list?target=prod4`}>
            <img
              src="/product/6113.png"
              alt="6113 풍속계"
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
          <Link to={`/product/list?target=prod5`}>
            <img
              src="/product/GL260.png"
              alt="GL260 데이터로거"
              width="320"
              height="100"
              border="1"
            />
            <br></br>
            데이터 로거
          </Link>
        </td>
        <td>
          <Link to={`/product/list?target=prod6`}>
            <img
              src="/product/HD-10.png"
              alt="HD-10 제작 실험장치"
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
          <img src="/icon_arrow_blue.png" alt="arrow" />
          &nbsp;
          <a>Sites</a>
        </td>
      </tr>
      <tr style={{ textAlign: "left" }}>
        <td colSpan="4" className="homeUl">
          <ul>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" alt="arrow" />
              &nbsp;
              <Link to="/about">회사소개</Link>
            </li>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" alt="arrow" />
              &nbsp;
              <Link to="/estimate">온라인 견적</Link>
            </li>
            <li>
              <img src="/icon_arrow_blue01.png" width="12px" alt="arrow" />
              &nbsp;
              <Link to="/video">참고 영상</Link>
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
