import React, { useEffect, useState } from "react";
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
        setData(product); // jsonb 필드 파싱
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MetaTag title={"Product | 제품 - 씨앤브이 (Currnt & Velocity)"} />
      <div className="[&_ul]:text-left [&_ul]:pe-5 [&_hr]:my-2 [&_hr]:border-black [&_a]:no-underline [&_a]:text-blue-600 [&_a:hover]:underline">
        <table width="40%" className="justify-self-center [&_tr]:text-center">
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
                  className="mx-auto"
                />
              </td>
            </tr>
            <tr className="!text-left whitespace-pre-line">
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
                  <tr className="!text-left !font-bold">
                    <td colSpan="4" className="!flex !items-center">
                      <img
                        src="/icon_arrow_blue.png"
                        alt="arrow"
                        className="mr-2"
                      />
                      {section.header}
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
                              className="w-full border-collapse"
                            >
                              <table className="w-full">
                                <tbody>
                                  <tr className="!text-left">
                                    <td
                                      colSpan="2"
                                      className="!flex !items-center"
                                    >
                                      <img
                                        src="/icon_arrow_blue01.png"
                                        width="12px"
                                        alt="arrow"
                                        className="mr-2"
                                      />
                                      {name}
                                    </td>
                                  </tr>
                                  <tr className="flex items-center gap-[10px] [&_ul]:flex-1 [&_li]:whitespace-nowrap [&_li]:overflow-ellipsis">
                                    <td>
                                      <img
                                        className="w-[150px] h-[150px] object-contain border border-gray-300 max-w-none"
                                        src={`/product/${models[0]}.png`}
                                        onError={(e) => {
                                          e.target.src = "/noimage.png";
                                        }}
                                        alt={name}
                                      />
                                    </td>
                                    <td>
                                      <ul className="px-7 list-disc">
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

            <tr className="h-10">
              <td colSpan="4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
