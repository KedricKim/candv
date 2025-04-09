import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { Link, useLocation } from "react-router";
import { supabase } from "../../lib/supabase";
import MetaTag from "../../SEOMetaTag";

const ProductList = () => {
  const location = useLocation();
  // const target = location.state.target;
  const params = new URLSearchParams(location.search);
  const target = params.get("target");

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data: product, error } = await supabase
        .from("product_list")
        .select()
        .eq("type", target)
        .single();

      if (error) {
        console.error("데이터 가져오기 오류:", error);
      } else {
        console.log(product);
        setData(product); // jsonb 필드 파싱
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MetaTag />
      <div className="productList">
        <table width="40%">
          <tbody>
            <tr>
              <th colSpan="4" bgcolor="#0000ff">
                <font color="#ffffff">{data?.name}</font>
              </th>
            </tr>
            <tr>
              <td colSpan="4">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <img
                  src={`/product/${target}.png`}
                  border="1"
                  alt="product_image"
                />
              </td>
            </tr>
            <tr style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              <td colSpan="4">{data?.description}</td>
            </tr>
            {data?.content.length > 0 &&
              data?.content.map((section, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td colSpan="4">
                      <hr />
                    </td>
                  </tr>
                  <tr style={{ textAlign: "left", fontWeight: "bold" }}>
                    <td colSpan="4">
                      <img src="/icon_arrow_blue.png" alt="arrow" />
                      &nbsp; {section.header}
                    </td>
                  </tr>
                  {(() => {
                    const rows = [];
                    const entries = section.attributes;
                    for (let i = 0; i < entries.length; i += 2) {
                      rows.push(
                        <tr key={i}>
                          {entries.slice(i, i + 2).map(({ name, models }) => (
                            <td
                              colSpan="2"
                              key={name}
                              className="product-table"
                            >
                              <table style={{ width: "100%" }}>
                                <tbody>
                                  <tr style={{ textAlign: "left" }}>
                                    <td colSpan="2">
                                      <img
                                        src="/icon_arrow_blue01.png"
                                        width="12px"
                                        alt="arrow"
                                      />
                                      &nbsp;{name}
                                    </td>
                                  </tr>
                                  <tr className="attribute-block">
                                    <td>
                                      <img
                                        src={`/product/${models[0]}.png`}
                                        onError={(e) => {
                                          e.target.src = "/noimage.png";
                                        }}
                                        alt={name}
                                      />
                                    </td>
                                    <td>
                                      <ul>
                                        {models.map((prd, idx) => (
                                          <li key={idx}>
                                            <Link to={`/product/detail/${prd}`}>
                                              {prd}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          ))}
                        </tr>
                      );
                    }
                    return rows;
                  })()}
                </React.Fragment>
              ))}

            <tr style={{ height: "20px" }}>
              <td colSpan="4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
