import React from "react";
import "./Product.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="product">
      <table width="40%">
        <tbody>
          <tr>
            <th colSpan="4" bgcolor="#0000ff">
              <font color="#ffffff">제품 소개</font>
            </th>
          </tr>
          <tr>
            <td colSpan="4">
              <hr></hr>
            </td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td colSpan="4">
              C & V에서는 계측계 측량계등 다양한 분야의 제품들을 소개 및
              공급하고 있습니다. <br></br>세계 유수의 첨단 기기 제품들을 가장
              저렴한 가격과 차별화된 서비스 및 기술지원으로 C & V의 독특한
              고객만족 서비스를 제공받으실 수 있습니다.
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <hr></hr>
            </td>
          </tr>
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
              <Link to={`/product/detail/VP1000`}>
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
              <Link to="/product/detail/VP1500">
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
              <Link to={`/product/detail/VP1000`}>
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
              <Link to="/product/detail/VP1500">
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
              <Link to="/product/detail/VP1500">
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
              <Link to={`/product/detail/VP1000`}>
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
        </tbody>
      </table>
    </div>
  );
};

export default Home;
