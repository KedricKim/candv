import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { productName } = useParams();

  return (
    <div className="productDetail">
      <table width="50%">
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td colSpan="4">
              <img
                src={`/candv/product/${productName}.png`}
                alt={productName}
                width="350"
                border="1"
              />
              <br></br>
              {productName}
            </td>
          </tr>
          <tr style={{ height: "20px" }}>
            <td colSpan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
              <img src="/candv/icon_arrow_blue.png" />
              &nbsp;
              <a>제품 설명</a>
            </td>
          </tr>
          <tr style={{ height: "10px" }}>
            <td colSpan="4"></td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td colSpan="4">
              직독식으로 측정이 가능하며, 검출기가 각 표시부와 호환성이 있으므로
              다른 표시부에서 바로 사용이 가능하다. 또한, 날짜 기능이 내장되어
              있으며, 소형/경량으로 관리 및 보관이 편리하다.
            </td>
          </tr>
          <tr style={{ height: "20px" }}>
            <td colSpan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
              <img src="/candv/icon_arrow_blue.png" />
              &nbsp;
              <a>제품 사양</a>
            </td>
          </tr>
          <tr style={{ height: "10px" }}>
            <td colSpan="4"></td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td colSpan="4">
              본체：VP1000 <br></br>
              검출기：VPT-200-09PS, VPT-200-18F, VPT2-200-08PS
              <br></br>
              표시기로 직독 하는 간이 측정 기 심이나 거리를 부대 보존하는 데이터
              보존 측정. <br></br>검출기 호환성이 있어, 다른 표시기로 곧바로
              사용 가능<br></br>
              날짜 기능 내장, 소형 경량, 휴대폰에 편리.
            </td>
          </tr>
          <tr style={{ height: "20px" }}>
            <td colSpan="4"></td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
              <img src="/candv/icon_arrow_blue.png" />
              &nbsp;
              <a>카탈로그</a>
            </td>
          </tr>
          <tr style={{ height: "10px" }}>
            <td colSpan="4"></td>
          </tr>
          <tr>
            <td colSpan="4">
              &nbsp;&nbsp;&nbsp;
              <img src="/candv/icon_arrow_blue01.png" width="12px" />
              &nbsp;
              <a href={`/candv/pdf/${productName}.pdf`} target="_blank">
                {productName}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ProductDetail;
