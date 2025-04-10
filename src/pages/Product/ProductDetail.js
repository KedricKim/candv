import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router";
import { supabase } from "../../lib/supabase";
import MetaTag from "../../SEOMetaTag";

const ProductDetail = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();
  const { productName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data: product, error } = await supabase
        .from("product")
        .select()
        .eq("name", productName)
        .single();

      if (error) {
        console.error("데이터 가져오기 오류:", error);
      } else {
        setData(product); // jsonb 필드 파싱
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MetaTag title={"Product | 제품상세 - 씨앤브이 (Currnt & Velocity)"} />
      <div className="productDetail">
        <table width="50%">
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td colSpan="4">
                <img
                  src={`/product/${productName}.png`}
                  alt={productName}
                  width="350"
                  border="1"
                  onError={(e) => {
                    e.target.src = "/noimage.png";
                    e.target.width = "100";
                  }}
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
                <img src="/icon_arrow_blue.png" alt="arrow" />
                &nbsp;
                <a>제품 설명</a>
              </td>
            </tr>
            <tr style={{ height: "10px" }}>
              <td colSpan="4"></td>
            </tr>
            <tr style={{ textAlign: "left" }}>
              <td colSpan="4">
                <div style={{ width: "100%", margin: "0 auto" }}>
                  <div
                    style={{
                      whiteSpace: "pre-line",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    {data?.content}
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <td colSpan="4"></td>
            </tr>
            <tr style={{ textAlign: "left", fontWeight: "bold" }}>
              <td colSpan="4">
                <img src="/icon_arrow_blue.png" alt="arrow" />
                &nbsp;
                <a>제품 사양</a>
              </td>
            </tr>
            <tr style={{ height: "10px" }}>
              <td colSpan="4"></td>
            </tr>
            <tr style={{ textAlign: "left" }}>
              <td colSpan="4">
                {data?.description.map((section, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    {/* 헤더 부분 */}
                    <h3
                      style={{
                        borderBottom: "2px solid #333",
                        paddingBottom: "5px",
                        marginTop: "0px",
                      }}
                    >
                      {section.header}
                    </h3>
                    {/* 데이터 테이블 */}
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "10px",
                      }}
                      border="1"
                    >
                      <tbody>
                        {Object.entries(section.attributes).map(
                          ([key, value]) => (
                            <tr key={key}>
                              <td
                                style={{
                                  fontWeight: "bold",
                                  padding: "8px",
                                  background: "#f5f5f5",
                                  width: "200px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {key}
                              </td>
                              <td
                                style={{
                                  padding: "8px",
                                  whiteSpace: "pre-line",
                                }}
                              >
                                {value}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                ))}
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <td colSpan="4"></td>
            </tr>

            {data?.catalog_yn && (
              <>
                <tr style={{ textAlign: "left", fontWeight: "bold" }}>
                  <td colSpan="4">
                    <img src="/icon_arrow_blue.png" alt="arrow" />
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
                    <img
                      src="/icon_arrow_blue01.png"
                      width="12px"
                      alt="arrow"
                    />
                    &nbsp;
                    <a href={`/pdf/${productName}.pdf`} target="_blank">
                      {productName}
                    </a>
                  </td>
                </tr>
                <tr style={{ height: "20px" }}>
                  <td colSpan="4"></td>
                </tr>
              </>
            )}
            <tr style={{ textAlign: "center", fontWeight: "bold" }}>
              <td colSpan="4">
                <button onClick={() => navigate(-1)}>뒤로</button>
              </td>
            </tr>
            <tr style={{ height: "20px" }}>
              <td colSpan="4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductDetail;
