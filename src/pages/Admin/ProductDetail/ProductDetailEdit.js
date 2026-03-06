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

// ✅ 정렬/아이디 보정 유틸
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

// ✅ 바깥으로 분리
const SortableRow = React.memo(function SortableRow({
  attr,
  sectionIdx,
  updateAttr,
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
    <tr
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        background: isDragging ? "#e6f7ff" : undefined,
      }}
    >
      <td
        className="font-bold p-2 bg-[#f5f5f5] w-[40px] border border-black text-center"
        style={{ cursor: "grab", userSelect: "none" }}
        {...attributes}
        {...listeners}
      >
        ☰
      </td>

      <td className="font-bold p-2 bg-[#f5f5f5] w-[200px] whitespace-nowrap border border-black">
        <input
          className="w-full bg-transparent outline-none"
          value={attr.name ?? ""}
          onChange={(e) =>
            updateAttr(sectionIdx, attr.id, { name: e.target.value })
          }
        />
      </td>

      <td className="p-2 whitespace-pre-line border border-black">
        <textarea
          className="w-full bg-transparent outline-none resize-y min-h-[40px]"
          value={attr.value ?? ""}
          onChange={(e) =>
            updateAttr(sectionIdx, attr.id, { value: e.target.value })
          }
        />
      </td>
    </tr>
  );
});

const ProductDetailEdit = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  const [editContent, setEditContent] = useState(""); // ✅ 제품 내용
  const [editDesc, setEditDesc] = useState([]); // ✅ 제품 사양
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
        setData(product);
        setEditContent(product?.content ?? "");
        setEditDesc(normalizeDescription(product?.description || []));
      }

      setLoading(false);
    };

    fetchData();
  }, [name]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

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

  const handleSave = async () => {
    setSaving(true);
    setError("");

    const newDesc = editDesc.map((section) => ({
      ...section,
      attributes: (section.attributes ?? []).map((attr, idx) => ({
        ...attr,
        order: idx + 1,
      })),
    }));

    const { error: updateError } = await supabase
      .from("product")
      .update({
        content: editContent, // ✅ 제품 내용 저장
        description: newDesc, // ✅ 제품 사양 저장
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
        paddingBottom: "100px", // ✅ 플로팅 버튼에 가리지 않도록 여백
      }}
    >
      <h2 className="font-bold text-xl mb-4">제품명: {name}</h2>
      {error && <div className="error-msg mb-4">{error}</div>}

      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          {/* ✅ 제품 내용 - 제품 사양보다 위 */}
          <div className="mb-8">
            <div className="!flex !items-center mb-2 font-bold">
              <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
              <span>제품 내용</span>
            </div>

            <div className="border border-black bg-white p-3">
              <textarea
                className="w-full min-h-[180px] outline-none resize-y"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="제품 내용을 입력하세요."
              />
            </div>
          </div>

          {/* ✅ 제품 사양 */}
          <table
            className="w-full border border-black bg-white"
            style={{ marginTop: 24 }}
          >
            <tbody>
              <tr className="text-left font-bold">
                <td colSpan="4" className="!flex !items-center mb-2">
                  <img
                    src="/icon_arrow_blue.png"
                    alt="arrow"
                    className="mr-2"
                  />
                  <a>제품 사양 (드래그로 순서 변경)</a>
                </td>
              </tr>

              <tr className="text-left">
                <td colSpan="4" className="mb-2">
                  {editDesc.map((section, sectionIdx) => (
                    <div
                      key={`${section.header}-${sectionIdx}`}
                      style={{ marginBottom: "20px" }}
                    >
                      <h3 className="font-bold text-lg pb-[5px] mt-0 border-b-2 border-[#333]">
                        {section.header}
                      </h3>

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
                          <table
                            className="w-full mt-3 !border border-black"
                            border="1"
                          >
                            <tbody>
                              {(section.attributes ?? []).map((attr) => (
                                <SortableRow
                                  key={attr.id}
                                  attr={attr}
                                  sectionIdx={sectionIdx}
                                  updateAttr={updateAttr}
                                />
                              ))}
                            </tbody>
                          </table>
                        </SortableContext>
                      </DndContext>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {/* ✅ 우측 하단 플로팅 저장 버튼 */}
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
