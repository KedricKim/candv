import React from "react";
import "./Product.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="product">
      <table width="40%">
        <tbody>
          <tr>
            <th colspan="4" bgcolor="#0000ff">
              <font color="#ffffff">제품 소개</font>
            </th>
          </tr>
          <tr>
            <td colspan="4">
              <hr></hr>
            </td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td colspan="4">
              C & V에서는 계측계 측량계등 다양한 분야의 제품들을 소개 및
              공급하고 있습니다. <br></br>세계 유수의 첨단 기기 제품들을 가장
              저렴한 가격과 차별화된 서비스 및 기술지원으로 C & V의 독특한
              고객만족 서비스를 제공받으실 수 있습니다.
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <hr></hr>
            </td>
          </tr>
          <tr style={{ height: "20px" }}>
            <td colspan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colspan="4">
              <img src="/icon_arrow_blue.png" />
              &nbsp;
              <a>주요 제품</a>
            </td>
          </tr>
          <tr style={{ height: "20px" }}>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1000.jpg"
                  alt="VP1000"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1000
              </Link>
            </td>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1500.png"
                  alt="VP1500"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1500
              </Link>
            </td>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1000.jpg"
                  alt="VP1000"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1000
              </Link>
            </td>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1500.png"
                  alt="VP1500"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1500
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1500.png"
                  alt="VP1500"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1500
              </Link>
            </td>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1000.jpg"
                  alt="VP1000"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1000
              </Link>
            </td>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1500.png"
                  alt="VP1500"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1500
              </Link>
            </td>
            <td>
              <Link to="/product/detail">
                <img
                  src="/product/VP1000.jpg"
                  alt="VP1000"
                  width="170"
                  height="100"
                  border="1"
                />
                VP1000
              </Link>
            </td>
          </tr>

          <tr style={{ height: "30px" }}>
            <td colspan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colspan="4">
              <img src="/icon_arrow_blue.png" />
              &nbsp;
              <a>제품군</a>
            </td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td colSpan="4" className="productUl">
              <ul>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a>파고계</a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a>유속계</a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a>수위계</a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a>풍속계</a>
                </li>
              </ul>
            </td>
          </tr>

          <tr style={{ height: "20px" }}>
            <td colspan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colspan="4">
              <img src="/icon_arrow_blue.png" />
              &nbsp;
              <a>카탈로그</a>
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td colSpan="4" className="productUl">
              <ul>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VE10.pdf" target="_blank">
                    VE10
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP2400.pdf" target="_blank">
                    VP2400(현장용)
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP1000.pdf" target="_blank">
                    VP1000
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP3000.pdf" target="_blank">
                    VP3000
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VE10.pdf" target="_blank">
                    VE10
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP2400.pdf" target="_blank">
                    VP2400(현장용)
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP1000.pdf" target="_blank">
                    VP1000
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP3000.pdf" target="_blank">
                    VP3000
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VE10.pdf" target="_blank">
                    VE10
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP2400.pdf" target="_blank">
                    VP2400(현장용)
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP1000.pdf" target="_blank">
                    VP1000
                  </a>
                </li>
                <li>
                  <img src="/icon_arrow_blue01.png" width="12px" />
                  &nbsp;
                  <a href="/pdf/VP3000.pdf" target="_blank">
                    VP3000
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
