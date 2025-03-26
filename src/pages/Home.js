import React, { useEffect } from "react";
import { Link } from "react-router";
import "./Home.css";
import ProductMain from "./Product/ProductMain";

const Home = () => {
  return (
    <div className="home">
      <table width="40%">
        <tbody>
          <tr>
            <td colSpan="4">
              <div className="slider">
                <img
                  className="mySlides fade active"
                  src="/bg1.png"
                  border="1"
                />
                <img className="mySlides fade" src="/bg2.png" border="1" />
                <img className="mySlides fade" src="/bg3.png" border="1" />
                <img className="mySlides fade" src="/bg4.png" border="1" />
              </div>
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
          <ProductMain />
        </tbody>
      </table>
    </div>
  );
};

export default Home;
