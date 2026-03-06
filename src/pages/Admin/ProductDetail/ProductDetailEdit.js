import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// 정렬/아이디 보정 유틸
const normalizeDescription = (desc = []) => {
  const sections = [...desc]
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((section, sIdx) => {
      const attrs = (section.attributes ?? [])
        .slice()
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((attr, aIdx) => ({
          ...attr,
          id:
            attr.id ?? `${section.header ?? sIdx}-${attr.name ?? aIdx}-${aIdx}`,
        }));

      return { ...section, attributes: attrs };
    });

  return sections;
};

const SortableRow = React.memo(function SortableRow({
  attr,
  sectionIdx,
  updateAttr,
  removeAttr,
}) {
  const id = String(attr.id);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={`
        flex items-stretch gap-3 rounded-xl border px-3 py-3 mb-3 bg-white
        ${isDragging ? "shadow-lg border-blue-300 bg-blue-50" : "border-gray-200"}
      `}
    >
      <div
        className="
          flex items-center justify-center w-11 min-w-11 rounded-lg
          bg-gray-100 text-gray-500 cursor-grab active:cursor-grabbing
          border border-gray-200
        "
        style={{ userSelect: "none" }}
        {...attributes}
        {...listeners}
      >
        ☰
      </div>

      <div className="w-[220px] min-w-[220px]">
        <div className="text-xs font-semibold text-gray-500 mb-1">항목명</div>
        <input
          className="
            w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2
            outline-none focus:border-blue-400 focus:bg-white
          "
          value={attr.name ?? ""}
          onChange={(e) =>
            updateAttr(sectionIdx, attr.id, { name: e.target.value })
          }
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold text-gray-500 mb-1">내용</div>
        <div className="flex items-start gap-3">
          <textarea
            className="
              flex-1 min-h-[44px] rounded-lg border border-gray-200 bg-gray-50 px-3 py-2
              outline-none resize-y focus:border-blue-400 focus:bg-white
            "
            value={attr.value ?? ""}
            onChange={(e) =>
              updateAttr(sectionIdx, attr.id, { value: e.target.value })
            }
          />

          <button
            type="button"
            onClick={() => removeAttr(sectionIdx, attr.id)}
            className="
              h-[44px] px-3 rounded-lg border border-red-200 bg-red-50
              text-red-600 text-sm font-semibold whitespace-nowrap
              hover:bg-red-100
            "
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
});

const ProductDetailEdit = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  const [editContent, setEditContent] = useState("");
  const [editDesc, setEditDesc] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({});
  const [saving, setSaving] = useState(false);
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
        const normalizedDesc = normalizeDescription(product?.description || []);
        setData(product);
        setEditContent(product?.content ?? "");
        setEditDesc(normalizedDesc);

        // 기본은 모두 펼침
        const initialCollapsed = {};
        normalizedDesc.forEach((_, idx) => {
          initialCollapsed[idx] = false;
        });
        setCollapsedSections(initialCollapsed);
      }

      setLoading(false);
    };

    fetchData();
  }, [name]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const toggleSection = (sectionIdx) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionIdx]: !prev[sectionIdx],
    }));
  };

  const updateSectionHeader = (sectionIdx, value) => {
    setEditDesc((prev) =>
      prev.map((section, idx) =>
        idx === sectionIdx ? { ...section, header: value } : section,
      ),
    );
  };

  const handleAttrDragEnd = (event, sectionIdx) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setEditDesc((prev) => {
      const next = prev.map((section, idx) => {
        if (idx !== sectionIdx) return section;

        const attrs = section.attributes ?? [];
        const oldIdx = attrs.findIndex(
          (a) => String(a.id) === String(active.id),
        );
        const newIdx = attrs.findIndex((a) => String(a.id) === String(over.id));
        if (oldIdx < 0 || newIdx < 0) return section;

        return {
          ...section,
          attributes: arrayMove(attrs, oldIdx, newIdx),
        };
      });

      return next;
    });
  };

  const updateAttr = (sectionIdx, attrId, patch) => {
    setEditDesc((prev) =>
      prev.map((section, sIdx) => {
        if (sIdx !== sectionIdx) return section;
        return {
          ...section,
          attributes: (section.attributes ?? []).map((attr) =>
            String(attr.id) === String(attrId) ? { ...attr, ...patch } : attr,
          ),
        };
      }),
    );
  };

  const addAttr = (sectionIdx) => {
    setEditDesc((prev) =>
      prev.map((section, sIdx) => {
        if (sIdx !== sectionIdx) return section;

        const attrs = section.attributes ?? [];
        const maxId = attrs.reduce((max, attr) => {
          const num = Number(attr.id);
          return Number.isNaN(num) ? max : Math.max(max, num);
        }, 0);

        const newAttr = {
          id: maxId + 1,
          name: "",
          value: "",
          order: attrs.length + 1,
        };

        return {
          ...section,
          attributes: [...attrs, newAttr],
        };
      }),
    );

    setCollapsedSections((prev) => ({
      ...prev,
      [sectionIdx]: false,
    }));
  };

  const removeAttr = (sectionIdx, attrId) => {
    setEditDesc((prev) =>
      prev.map((section, sIdx) => {
        if (sIdx !== sectionIdx) return section;

        return {
          ...section,
          attributes: (section.attributes ?? []).filter(
            (attr) => String(attr.id) !== String(attrId),
          ),
        };
      }),
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");

    const newDesc = editDesc.map((section, sectionIdx) => ({
      ...section,
      order: section.order ?? sectionIdx + 1,
      attributes: (section.attributes ?? []).map((attr, idx) => ({
        ...attr,
        order: idx + 1,
      })),
    }));

    const { error: updateError } = await supabase
      .from("product")
      .update({
        content: editContent,
        description: newDesc,
      })
      .eq("name", name);

    if (updateError) {
      setError("저장 실패: " + updateError.message);
    } else {
      const updatedData = {
        ...data,
        content: editContent,
        description: newDesc,
      };
      setData(updatedData);
      setEditDesc(normalizeDescription(newDesc));
    }

    setSaving(false);
  };

  return (
    <div
      className="product-detail-edit-container"
      style={{
        maxWidth: 900,
        margin: "0 auto",
        paddingBottom: "100px",
      }}
    >
      <h2 className="font-bold text-xl mb-4">제품명: {name}</h2>
      {error && <div className="error-msg mb-4 text-red-600">{error}</div>}

      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <div className="mb-8">
            <div className="flex items-center mb-3 font-bold text-[18px] text-gray-800">
              <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
              <span>제품 내용</span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <textarea
                className="
                  w-full min-h-[180px] rounded-xl border border-gray-200 bg-gray-50 px-4 py-3
                  outline-none resize-y focus:border-blue-400 focus:bg-white
                "
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="제품 내용을 입력하세요."
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center mb-3 font-bold text-[18px] text-gray-800">
              <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
              <span>제품 사양</span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-gray-500 mb-5">
                드래그하여 순서를 변경하고, 항목을 수정/추가/삭제할 수 있습니다.
              </div>

              {editDesc.map((section, sectionIdx) => {
                const isCollapsed = collapsedSections[sectionIdx];

                return (
                  <div
                    key={`${section.header}-${sectionIdx}`}
                    className="mb-5 last:mb-0 rounded-2xl border border-gray-200 bg-gray-50/60 overflow-hidden"
                  >
                    {/* section header */}
                    <div className="flex items-center gap-3 px-4 py-4 bg-white border-b border-gray-200">
                      <input
                        className="
                          flex-1 text-lg font-bold text-gray-800 bg-transparent
                          outline-none border border-transparent rounded-lg px-2 py-1
                          focus:border-blue-300 focus:bg-blue-50
                        "
                        value={section.header ?? ""}
                        onChange={(e) =>
                          updateSectionHeader(sectionIdx, e.target.value)
                        }
                        placeholder="섹션 제목"
                      />

                      <button
                        type="button"
                        onClick={() => toggleSection(sectionIdx)}
                        className="
                          min-w-[88px] h-[40px] px-3 rounded-lg border border-gray-200
                          bg-gray-50 text-sm font-semibold text-gray-700 hover:bg-gray-100
                        "
                      >
                        {isCollapsed ? "펼치기" : "접기"}
                      </button>
                    </div>

                    {/* section body */}
                    {!isCollapsed && (
                      <div className="p-4">
                        <DndContext
                          sensors={sensors}
                          collisionDetection={closestCenter}
                          onDragEnd={(e) => handleAttrDragEnd(e, sectionIdx)}
                        >
                          <SortableContext
                            items={(section.attributes ?? []).map((attr) =>
                              String(attr.id),
                            )}
                            strategy={verticalListSortingStrategy}
                          >
                            <div>
                              {(section.attributes ?? []).map((attr) => (
                                <SortableRow
                                  key={attr.id}
                                  attr={attr}
                                  sectionIdx={sectionIdx}
                                  updateAttr={updateAttr}
                                  removeAttr={removeAttr}
                                />
                              ))}
                            </div>
                          </SortableContext>
                        </DndContext>

                        <div className="mt-3">
                          <button
                            type="button"
                            onClick={() => addAttr(sectionIdx)}
                            className="
                              px-4 py-2 rounded-lg border border-blue-200 bg-blue-50
                              text-blue-700 text-sm font-semibold hover:bg-blue-100
                            "
                          >
                            + 항목 추가
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {!loading && (
        <button
          className="save-btn"
          onClick={handleSave}
          disabled={saving}
          style={{
            position: "fixed",
            right: "32px",
            bottom: "32px",
            minWidth: "140px",
            height: "52px",
            fontWeight: 700,
            borderRadius: "9999px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            zIndex: 1000,
            padding: "0 20px",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: saving ? "not-allowed" : "pointer",
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? "저장중..." : "저장"}
        </button>
      )}
    </div>
  );
};

export default ProductDetailEdit;
