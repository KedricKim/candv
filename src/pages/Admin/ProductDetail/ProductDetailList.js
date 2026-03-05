import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import "./ProductDetailList.css";

const PAGE_SIZE = 10;

const ProductDetailList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

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
      setProducts(data);
      setTotal(count || 0);
    }
    setLoading(false);
  };

  // input 변경 핸들러
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // 엔터 또는 버튼 클릭 시 검색
  const handleSearch = (e) => {
    if (!e || (e.type === "keydown" && e.key === "Enter")) {
      setSearch(input);
      setPage(1);
    }
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const navigate = useNavigate();
  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <input
          className="product-search"
          type="text"
          placeholder="제품명 검색"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
        />
        <button
          style={{
            marginLeft: "0.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
      <table className="product-list-table">
        <thead>
          <tr>
            <th>제품명</th>
            <th>내용</th>
            <th>메인 여부</th>
            <th>카탈로그 여부</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                로딩중...
              </td>
            </tr>
          ) : products.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                데이터 없음
              </td>
            </tr>
          ) : (
            products.map((p) => (
              <tr key={p.name}>
                <td>
                  <span
                    style={{
                      color: "#2563eb",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() =>
                      navigate(
                        `/admin/product-detail-edit/${encodeURIComponent(p.name)}`,
                      )
                    }
                  >
                    {p.name}
                  </span>
                </td>
                <td className="content-cell">{p.content || "-"}</td>
                <td>
                  {p.main_yn === true ? "Y" : p.main_yn === false ? "N" : "-"}
                </td>
                <td>
                  {p.catalog_yn === true
                    ? "Y"
                    : p.catalog_yn === false
                      ? "N"
                      : "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="product-list-pagination">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          이전
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || totalPages === 0}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default ProductDetailList;
