import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";

const PAGE_SIZE = 5;

const AdminDashboard = () => {
  const [estimates, setEstimates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEstimate, setSelectedEstimate] = useState(null);

  useEffect(() => {
    const fetchEstimates = async () => {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("estimate")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError("견적 문의 데이터를 불러오지 못했습니다.");
        console.error(error);
      } else {
        setEstimates(data || []);
      }

      setLoading(false);
    };

    fetchEstimates();
  }, []);

  const formatDate = (value) => {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSearch = () => {
    setSearchKeyword(searchInput.trim());
    setCurrentPage(1);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredEstimates = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();

    if (!keyword) return estimates;

    return estimates.filter((item) => {
      const name = item.name?.toLowerCase() || "";
      const company = item.company?.toLowerCase() || "";
      const product = item.product?.toLowerCase() || "";

      return (
        name.includes(keyword) ||
        company.includes(keyword) ||
        product.includes(keyword)
      );
    });
  }, [estimates, searchKeyword]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEstimates.length / PAGE_SIZE),
  );

  const pagedEstimates = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredEstimates.slice(start, end);
  }, [filteredEstimates, currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-[1400px] mx-auto">
        {/* 상단 섹션 */}
        <section className="rounded-3xl bg-white shadow-sm border border-gray-200 min-h-[220px] flex items-center justify-center mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
              우리 아빠 화이팅!!
            </h1>
            <p className="mt-4 text-gray-500">
              관리자 대시보드에 오신 것을 환영합니다.
            </p>
          </div>
        </section>

        {/* 하단 섹션 */}
        <section className="rounded-3xl bg-white shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                견적 문의 목록
              </h2>
            </div>
            <div className="text-sm text-gray-500">
              총{" "}
              <span className="font-semibold text-gray-700">
                {filteredEstimates.length}
              </span>
              건
            </div>
          </div>

          {/* 검색창 */}
          <div className="flex items-center gap-3 mb-5">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="담당자명, 회사명, 제품명으로 검색"
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
          ) : error ? (
            <div className="py-16 text-center text-red-500">{error}</div>
          ) : filteredEstimates.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              검색 조건에 맞는 견적 문의 데이터가 없습니다.
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full min-w-[1200px] border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="w-[70px] text-center px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        번호
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        담당자명
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        회사명
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        전화번호
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        이메일
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        제품
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        타입
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        해상도
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                        문의 내용
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200 whitespace-nowrap">
                        등록일시
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pagedEstimates.map((item, index) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedEstimate(item)}
                        className={`cursor-pointer transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-blue-50`}
                      >
                        <td className="text-center px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top">
                          {filteredEstimates.length -
                            ((currentPage - 1) * PAGE_SIZE + index)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {item.name || "-"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {item.company || "-"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {item.phone || "-"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {item.email || "-"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {item.product || "-"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {item.type || "-"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {item.res || "-"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top max-w-[260px]">
                          <div className="truncate whitespace-nowrap overflow-hidden text-ellipsis">
                            {item.message || "-"}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-top whitespace-nowrap">
                          {formatDate(item.created_at)}
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
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                    currentPage === 1
                      ? "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                  }`}
                >
                  이전
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
                  (page) => (
                    <button
                      type="button"
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold border ${
                        currentPage === page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                    currentPage === totalPages
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

      {/* 상세보기 모달 */}
      {selectedEstimate && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
          onClick={() => setSelectedEstimate(null)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gray-50">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  견적 문의 상세보기
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  문의 ID: {selectedEstimate.id}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEstimate(null)}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DetailField label="담당자명" value={selectedEstimate.name} />
                <DetailField label="회사명" value={selectedEstimate.company} />
                <DetailField label="전화번호" value={selectedEstimate.phone} />
                <DetailField label="이메일" value={selectedEstimate.email} />
                <DetailField label="제품" value={selectedEstimate.product} />
                <DetailField label="타입" value={selectedEstimate.type} />
                <DetailField label="해상도" value={selectedEstimate.res} />
                <DetailField
                  label="등록일시"
                  value={formatDate(selectedEstimate.created_at)}
                />
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  문의 내용
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-gray-700 whitespace-pre-wrap break-words min-h-[160px]">
                  {selectedEstimate.message || "-"}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-white flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedEstimate(null)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailField = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4">
      <div className="text-sm font-semibold text-gray-500 mb-1">{label}</div>
      <div className="text-gray-800 break-words whitespace-pre-wrap">
        {value || "-"}
      </div>
    </div>
  );
};

export default AdminDashboard;
