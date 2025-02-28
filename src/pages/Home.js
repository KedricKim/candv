import React from "react";
import { Link } from "react-router";
import "./Home.css";

const Home = () => {
  const catalog = [
    "VP1000",
    "VP1200",
    "VP1500",
    "VP2400",
    "VP3000",
    "VS201_E",
    "VO1000",
    "VO101-301",
    "VM2001",
    "VM1001RS",
    "VM801L",
    "VM801H_E",
    "VE10",
    "VE-20_J",
    "UH401",
    "SW101",
    "SH301",
    "PH355",
    "NS101",
    "LP1100",
    "HV401",
    "GR20-New",
    "FM2001H",
    "FL100",
    "CH601",
  ];

  return (
    <div className="home">
      <table width="40%">
        <tbody>
          <tr>
            <td colSpan="4">
              <img src="/bg.jpg" alt="VP1500" border="1" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <hr></hr>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              폐사는 일본 KENEK사의 한국 SOLE AGENT입니다.
              <br></br>KENEK사에서 생산되는 모든 제품을 저렴한 가격으로 공급하고
              있습니다. <br></br>많은 이용 부탁드립니다.
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
              <a>주요 제품</a>
            </td>
          </tr>
          <tr style={{ height: "20px" }}>
            <td colSpan="4"></td>
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
            <td colSpan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
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
            <td colSpan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
              <img src="/icon_arrow_blue.png" />
              &nbsp;
              <a>카탈로그</a>
            </td>
          </tr>

          {catalog
            .reduce((acc, el, idx) => {
              if (idx % 4 === 0) acc.push([]); // 새로운 <ul> 그룹 생성
              acc[acc.length - 1].push(el);
              return acc;
            }, [])
            .map((group, index) => (
              <tr className="productCatalog" key={index}>
                {group.map((el) => (
                  <td key={el}>
                    <img
                      src="/icon_arrow_blue01.png"
                      width="12px"
                      alt="arrow"
                    />
                    &nbsp;
                    <a href={`/pdf/${el}.pdf`} target="_blank">
                      {el}
                    </a>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
