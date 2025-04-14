import React, { useEffect, useState } from "react";
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
      <div className="productDetail ">
        <table width="50%" className="justify-self-center">
          <tbody>
            <tr className="text-center">
              <td colSpan="4" className="pb-3">
                <img
                  src={`/product/${productName}.png`}
                  alt={productName}
                  width="350"
                  border="1"
                  onError={(e) => {
                    e.target.src = "/noimage.png";
                    e.target.width = "100";
                  }}
                  className="mx-auto"
                />
                {productName}
              </td>
            </tr>
            <tr className="text-left font-bold pb-3">
              <td colSpan="4" className="!flex !items-center mb-2">
                <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
                <a>제품 설명</a>
              </td>
            </tr>
            <tr className="text-left">
              <td colSpan="4" className="pb-5">
                <div className="w-full m-0">
                  <div className="whitespace-pre-line text-base leading-6">
                    {data?.content}
                  </div>
                </div>
              </td>
            </tr>
            <tr className="text-left font-bold">
              <td colSpan="4" className="!flex !items-center mb-2">
                <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
                <a>제품 사양</a>
              </td>
            </tr>
            <tr className="text-left">
              <td colSpan="4" className="mb-2">
                {data?.description.map((section, index) => (
                  <div key={index} className="mb-5">
                    {/* 헤더 부분 */}
                    <h3 className="font-bold text-lg pb-[5px] mt-0 border-b-2 border-[#333]">
                      {section.header}
                    </h3>
                    {/* 데이터 테이블 */}
                    <table
                      className="w-full mt-3 !border border-black"
                      border="1"
                    >
                      <tbody>
                        {Object.entries(section.attributes).map(
                          ([key, value]) => (
                            <tr key={key}>
                              <td className="font-bold p-2 bg-[#f5f5f5] w-[200px] whitespace-nowrap border border-black">
                                {key}
                              </td>
                              <td className="p-2 whitespace-pre-line border border-black">
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

            {data?.catalog_yn && (
              <>
                <tr className="text-left font-bold">
                  <td colSpan="4" className="!flex !items-center mb-2">
                    <img
                      src="/icon_arrow_blue.png"
                      alt="arrow"
                      className="mr-2"
                    />
                    <a>카탈로그</a>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className="!flex !items-center mb-2">
                    <img
                      src="/icon_arrow_blue01.png"
                      width="12px"
                      alt="arrow"
                      className="mr-2 ml-5"
                    />
                    <a
                      href={`/pdf/${productName}.pdf`}
                      target="_blank"
                      className="text-inherit hover:underline"
                    >
                      {productName}
                    </a>
                  </td>
                </tr>
              </>
            )}
            <tr className="text-center">
              <td colSpan="4">
                <button
                  className="bg-gray-300 px-2 border border-black mb-3"
                  onClick={() => navigate(-1)}
                >
                  뒤로
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductDetail;
