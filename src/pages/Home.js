import React from "react";
import { Link } from "react-router";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <table width="40%">
        <tbody>
          <tr>
            <td colspan="4">
              <img src="/bg.jpg" alt="VP1500" border="1" />
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <hr></hr>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              폐사는 일본 KENEK사의 한국 SOLE AGENT입니다.
              <br></br>KENEK사에서 생산되는 모든 제품을 저렴한 가격으로 공급하고
              있습니다. <br></br>많은 이용 부탁드립니다.
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
            <td colSpan="4" className="homeUl">
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
            <td colSpan="4" className="homeUl">
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
