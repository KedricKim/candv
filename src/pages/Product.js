import React from "react";
import "./Product.css";
import { Link } from "react-router";

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
