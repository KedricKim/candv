import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabase";

const PAGE_SIZE = 10;

const ProductDetailList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [page, search]);

  const fetchProducts = async () => {
    setLoading(true);

    let query = supabase.from("product").select("*", { count: "exact" });

    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, count, error } = await query.range(from, to);

    if (!error) {
      setProducts(data || []);
      setTotal(count || 0);
    } else {
      console.error(error);
      setProducts([]);
      setTotal(0);
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    if (
      !e ||
      e.type === "click" ||
      (e.type === "keydown" && e.key === "Enter")
    ) {
      setSearch(input.trim());
      setPage(1);
    }
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-[1400px] mx-auto">
        <section className="rounded-3xl bg-white shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                제품 상세 목록
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                제품 정보를 조회하고 상세 편집 페이지로 이동할 수 있습니다.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              총 <span className="font-semibold text-gray-700">{total}</span>건
            </div>
          </div>

          {/* 검색창 */}
          <div className="flex items-center gap-3 mb-5">
            <input
              type="text"
              placeholder="제품명 검색"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleSearch}
              className="w-full max-w-[360px] h-[44px] rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-blue-500"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="h-[44px] px-5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              검색
            </button>
          </div>

          {loading ? (
            <div className="py-16 text-center text-gray-500">
              데이터를 불러오는 중입니다...
            </div>
          ) : products.length === 0 ? (
            <div className="py-16 text-center text-gray-500">데이터 없음</div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-[1000px] border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="w-[80px] px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b border-gray-200">
                        번호
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        제품명
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        내용
                      </th>
                      <th className="w-[140px] px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b border-gray-200">
                        메인 여부
                      </th>
                      <th className="w-[140px] px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b border-gray-200">
                        카탈로그 여부
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, index) => (
                      <tr
                        key={p.name}
                        className={`cursor-pointer transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-blue-50`}
                        onClick={() =>
                          navigate(
                            `/admin/product-detail-edit/${encodeURIComponent(p.name)}`,
                          )
                        }
                      >
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 text-center align-middle">
                          {total - ((page - 1) * PAGE_SIZE + index)}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-middle whitespace-nowrap">
                          <button
                            type="button"
                            className="text-blue-600 font-medium hover:text-blue-800"
                          >
                            {p.name}
                          </button>
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-middle max-w-[420px]">
                          <div className="truncate whitespace-nowrap overflow-hidden text-ellipsis">
                            {p.content || "-"}
                          </div>
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 text-center align-middle">
                          {p.main_yn === true
                            ? "Y"
                            : p.main_yn === false
                              ? "N"
                              : "-"}
                        </td>

                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 text-center align-middle">
                          {p.catalog_yn === true
                            ? "Y"
                            : p.catalog_yn === false
                              ? "N"
                              : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 페이지네이션 */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  disabled={page === 1}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                    page === 1
                      ? "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                  }`}
                >
                  이전
                </button>

                {Array.from(
                  { length: totalPages || 1 },
                  (_, idx) => idx + 1,
                ).map((pageNumber) => (
                  <button
                    type="button"
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`w-10 h-10 rounded-lg text-sm font-semibold border ${
                      page === pageNumber
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    setPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={page === totalPages || totalPages === 0}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                    page === totalPages || totalPages === 0
                      ? "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                  }`}
                >
                  다음
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductDetailList;
