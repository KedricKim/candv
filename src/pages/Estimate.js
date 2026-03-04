import React, { useRef } from "react";
import "./Estimate.css";
import emailjs from "@emailjs/browser";
import MetaTag from "../SEOMetaTag";

const Estimate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let name = form.current.from_name.value.replaceAll(" ", "");
    let phone = form.current.phone.value.replaceAll(" ", "");
    let email = form.current.email.value.replaceAll(" ", "");
    let message = form.current.message.value.replaceAll(" ", "");

    if (name.length < 1) {
      alert("담당자명을 입력해주세요.");
      form.current.from_name.focus();
    } else if (phone.length < 1) {
      alert("전화번호를 입력해주세요.");
      form.current.phone.focus();
    } else if (email.length < 1) {
      alert("이메일을 입력해주세요.");
      form.current.email.focus();
    } else if (message.length < 1) {
      alert("문의 내용을 입력해주세요.");
      form.current.message.focus();
    } else {
      emailjs
        .sendForm(
          "service_574i0y8",
          "template_022h1ek",
          form.current,
          "7JOEcnt5thCGv_WUp"
        )
        .then(
          (result) => {
            alert(
              "문의주신 내용이 접수되었습니다. 빠른시일 내에 연락드리도록 하겠습니다."
            );
            document.getElementById("reset").click();
          },
          (error) => {
            alert("문의 접수에 실패하였습니다.");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <MetaTag
        title={"Estimate | 제품문의 - 씨앤브이 (Currnt & Velocity)"}
        desc={
          "C & V에서는 계측계 측량계등 다양한 분야의 제품들을 소개 및 공급하고 있습니다. 세계 유수의 첨단 기기 제품들을 가장 저렴한 가격과 차별화된 서비스 및 기술지원으로 C & V의 독특한 고객만족 서비스를 제공받으실 수 있습니다."
        }
        keywords={
          "씨앤브이,candv,cnv,c&v,KENEK,케넥,캐낵,유속계,파고계,압력계,풍속계,데이터로거,제작실험장치,공기,물,온도,습도,압력,무게,힘,속도,풍량,풍속,환경,압력센서,개수로,적외선온도계,수리실험,분류충격,오리피스,레이놀드수,부체안정,벤츄리,관마찰,볼텍스,펠톤,가시화,투수성,포인트,훅게이지,관수로,열전도,열교환기,열전달,칼로리,회전수,소음계,이슬점,노점,수분,진공,점도,인장,압축,유량,일사,열선유속계,파고,수위,사면,수소기포,탁도,엽록소,수질,열화상,적외선,테이터처리,마노메타,냉매충진기,Wind tunnel,open channel,Wave generator,Smoke,hydrogen Bubble,Water,Pressure,Humidity,Temperature,Air velocity,Volume,Gas,Honey-comb,PH,ORP,Turbidity,Data Acquisition,Manometer,Pitot tube,Pressure transmitter,Transducer,Thermal imaging,RPM,Co,Co2,Sound level,Dust,Dewpoint,Vibration,Force,Ice Maker,Refrigerator,Moisture,Lux,Glass,Vacuum,Viscometer,MassFlow,Solra,Traverse,Airflow,Hydraulic bench,Jet impact,Orifice,Reynolds number,Pipe flow,Stability,Voltex,Flow Visuation,Venturi,Permeability,Point,Hook,Thermal conductivity,Infrared,Sensor,Calorimeter,Automotive Measurement"
        }
      />
      <div className="estimate">
        <table
          border="0"
          width="40%"
          className="justify-self-center [&_hr]:border-black [&_hr]:my-2 [&_input]:border [&_input]:border-black"
        >
          <tbody>
            <tr>
              <th colSpan="3" bgcolor="#0000ff">
                <font color="#ffffff">온라인 견적</font>
              </th>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>
                문의나 상담하실 내용이 있으시면 온라인 견적을 활용하여 주십시오.
                <br></br>
                최대한 빨리 처리하도록 하겠습니다.<br></br>
                상담을 원하시는 분은 담당자, 상호, 연락처를 필히 남겨 주시기
                바랍니다.
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <form ref={form} onSubmit={sendEmail}>
                    <table className="mailform [&_span]:text-red-600">
                      <tbody>
                        <tr>
                          <th>
                            <p>
                              <span>*</span> 담당자
                            </p>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="from_name"
                              size="40"
                              className="w-60"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>상호</p>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="brand"
                              size="40"
                              className="w-60"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>
                              <span>*</span> 전화번호
                            </p>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="phone"
                              size="40"
                              className="w-60"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>
                              <span>*</span> E-Mail
                            </p>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="email"
                              size="30"
                              className="w-40"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>제품명</p>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="product"
                              size="30"
                              className="w-40"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>
                              <span className="text-red-600">*</span> 상담항목
                            </p>
                          </th>
                          <td>
                            <input
                              type="radio"
                              name="type"
                              value="제품"
                              className="mx-1"
                            />
                            제품
                            <input
                              className="mx-1"
                              type="radio"
                              name="type"
                              value="견적"
                            />
                            견적
                            <input
                              className="mx-1"
                              type="radio"
                              name="type"
                              value="메뉴얼"
                            />
                            메뉴얼
                            <input
                              className="mx-1"
                              type="radio"
                              name="type"
                              value="기타"
                              defaultChecked
                            />
                            기타 - 원하시는 상담 항목을 선택하세요.
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>
                              <span>*</span> 회신방법
                            </p>
                          </th>
                          <td>
                            <input
                              type="radio"
                              name="res"
                              value="제품"
                              className="mx-1"
                            />
                            전화
                            <input
                              type="radio"
                              name="res"
                              value="메뉴얼"
                              defaultChecked
                              className="mx-1"
                            />
                            이메일 - 원하시는 상담 항목을 선택하세요.
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <p>
                              <span>*</span> 내용
                            </p>
                          </th>
                          <td>
                            <textarea
                              name="message"
                              rows="10"
                              cols="70"
                              className="h-32 border border-black"
                            ></textarea>
                          </td>
                        </tr>
                        <tr>
                          <th></th>
                          <td>
                            <input
                              type="submit"
                              value="견적문의"
                              className="px-2"
                            />
                            &nbsp;&nbsp;
                            <input
                              id="reset"
                              type="reset"
                              name="reset"
                              value="다시쓰기"
                              className="px-2"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Estimate;
