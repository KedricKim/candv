import React from "react";
import "./Product.css";
import { Link } from "react-router";
import ProductMain from "./Product/ProductMain";
import MetaTag from "../SEOMetaTag";

const Product = () => {
  return (
    <>
      <MetaTag />

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
            <ProductMain />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
