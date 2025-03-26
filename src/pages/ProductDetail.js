import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router";
import { supabase } from "../lib/supabase";

const ProductDetail = () => {
  const [data, setData] = useState();

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
        console.log(product);
        setData(product); // jsonb 필드 파싱
      }
    };

    fetchData();
  }, []);

  const { productName } = useParams();
  const navigate = useNavigate();
  const detail = `- 검출기의 호환성 : 만일의 Trouble에도 준비된 예비 검출기로 검정 없이 교환하여 바로 사용할 수 있다.(표시부에 의해 검출기의 검정 계수 입력) 또한 용도에 따라 검출기를 교환함으로서 실험실과 현장용으로도 사용할 수 있다.
              - 수평 방향 유속(X.Y축 방향) 2성분 및 수직 유향(Z축)을 포함한 3성분 동시에 측정 가능.
              - 최대 약 12,000 Data(File명, 유속 Data, 평균시간, 시간)을 보존하여 P/C롤 전송할 수 있습니다. 또한 전용 Software에 의해 실시간 측정 Data를 Computer에 전송하여 실시간 처리 할 수 있다.
              - 1, 5, 10, 20, 40, 60초에 대한 매초마다 평균 유속 표시할 수 있습니다.
              - 자동 감도 : 유속에 대응한 최적한 감도로 자동적으로 조정하여 항시 고 정도의 측정을 할 수 있다.
              - 간단한 조작법 : 측정 개시부터 종료까지의 경과를 표시부 및 Buzzer음 으로 표시합니다.`;
  const description = [
    {
      header: "본체부 #VP3000",
      attributes: {
        "측정 방향": "X.Y.Z 3 성분, 6 방향",
        "측정 범위": "0 - ±25, 50, 100, 200cm/s(Full scale 4 range 자동 절환)",
        "측정 정도": `0 - ±0.5m/s : ±0.01m/s 이내
  ±0.5 - ±1.0m/s : ±0.02 m/s 이내
  ±1.0 - ±2.0m/s : ±0.04m/s 이내`,
        "Zero 조정": "Zero 조정 Mode에서 One-touch 조정",
        "응답 시간": "0.5 초",
        "감도 절환": "자동 절환",
        Noise: "±0.005m/s 이내",
        "측정 평균 시간": "1, 5, 10, 20, 40, 60 초",
        표시: "LCD(4 행 20 문자)",
        "Data 기억 용량":
          "약 12,000 data\n(File명, 유속, 평균시간, 시간)-1 Data",
        "Data 출력": "Computer에 실시간 Data 전송(RS-232C)",
        "검출기 호환성":
          "검출기마다 표시되어 있는 계수 No. 입력에 의한 호환 가능",
        전원: "내장 충전용 밧데리 12V & AC Adapter(220V AC)",
        "연속 사용 시간": "약 11 시간",
        "사용 환경": "온도 0-50°C, 습도 80%RH",
        중량: "1.2 kg",
        크기: "215(W) x 100(D) x 72(H)mm",
      },
    },
    {
      header: "검출부 #VPT3-200-13P",
      attributes: {
        "방수 내압": "20m 수심 내압",
        "사용 수질": "일반 수돗물, 공업용수, 우수등",
        "사용 온도 범위": "0-40°C",
        "접속 Cable": "10m",
        크기: "직경 13 x 445(L)mm",
        중량: "230g",
      },
    },
    {
      header: "Data 수집 Software (Maker/Kenek)",
      attributes: {
        "Data 출력": "Real time data 출력",
        "Data 용량": "약 30,000 Data",
        "Sampling Rate": "Max. 80Hz",
        "Sampling Time": "Min. 1 nsec",
        표시: "실시간 Graphic 표시",
        "측정 결과": "Max. Min. Avrg. 표시 및 엑셀 Data 저장",
      },
    },
  ];
  return (
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
              <img src="/icon_arrow_blue.png" />
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
              <img src="/icon_arrow_blue.png" />
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
                              style={{ padding: "8px", whiteSpace: "pre-line" }}
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
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
              <img src="/icon_arrow_blue.png" />
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
              <img src="/icon_arrow_blue01.png" width="12px" />
              &nbsp;
              <a href={`/pdf/${productName}.pdf`} target="_blank">
                {productName}
              </a>
            </td>
          </tr>
          <tr style={{ height: "20px" }}>
            <td colSpan="4"></td>
          </tr>
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
  );
};
export default ProductDetail;
