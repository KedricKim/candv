import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";

const ProductDetailEdit = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      const { data: product, error } = await supabase
        .from("product")
        .select()
        .eq("name", name)
        .single();
      if (error) {
        setError("데이터 가져오기 오류: " + error.message);
      } else {
        setData(product);
      }
      setLoading(false);
    };
    fetchData();
  }, [name]);

  return (
    <div className="product-detail-edit-container" style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2 className="font-bold text-xl mb-4">제품명: {name}</h2>
      {error && <div className="error-msg">{error}</div>}
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <table className="w-full border border-black bg-white" style={{ marginTop: 24 }}>
          <tbody>
            <tr className="text-left font-bold">
              <td colSpan="4" className="!flex !items-center mb-2">
                <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
                <a>제품 사양</a>
              </td>
            </tr>
            <tr className="text-left">
              <td colSpan="4" className="mb-2">
                {data?.description
                  ?.slice()
                  .sort((a, b) => a.order - b.order)
                  .map((section) => (
                    <div key={section.order} style={{ marginBottom: "20px" }}>
                      <h3 className="font-bold text-lg pb-[5px] mt-0 border-b-2 border-[#333]">
                        {section.header}
                      </h3>
                      <table className="w-full mt-3 !border border-black" border="1">
                        <tbody>
                          {section.attributes
                            ?.slice()
                            .sort((a, b) => a.order - b.order)
                            .map((attr) => (
                              <tr key={attr.order}>
                                <td className="font-bold p-2 bg-[#f5f5f5] w-[200px] whitespace-nowrap border border-black">
                                  {attr.name}
                                </td>
                                <td className="p-2 whitespace-pre-line border border-black">
                                  {attr.value}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductDetailEdit;
