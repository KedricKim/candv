import React from "react";
import MetaTag from "../SEOMetaTag";

const About = () => {
  return (
    <>
      <MetaTag
        title={"About | 회사소개 - 씨앤브이 (Currnt & Velocity)"}
        desc={
          "폐사는 일본 KENEK사의 한국 SOLE AGENT입니다. KENEK사에서 생산되는 모든 제품을 저렴한 가격으로 공급하고 있습니다.candv,cnv,c&v,kenek,케넥,유속계,파고계,압력계,풍속계,씨앤브이"
        }
        keywords={
          "씨앤브이,candv,cnv,c&v,KENEK,케넥,캐낵,유속계,파고계,압력계,풍속계,데이터로거,제작실험장치,공기,물,온도,습도,압력,무게,힘,속도,풍량,풍속,환경,압력센서,개수로,적외선온도계,수리실험,분류충격,오리피스,레이놀드수,부체안정,벤츄리,관마찰,볼텍스,펠톤,가시화,투수성,포인트,훅게이지,관수로,열전도,열교환기,열전달,칼로리,회전수,소음계,이슬점,노점,수분,진공,점도,인장,압축,유량,일사,열선유속계,파고,수위,사면,수소기포,탁도,엽록소,수질,열화상,적외선,테이터처리,마노메타,냉매충진기,Wind tunnel,open channel,Wave generator,Smoke,hydrogen Bubble,Water,Pressure,Humidity,Temperature,Air velocity,Volume,Gas,Honey-comb,PH,ORP,Turbidity,Data Acquisition,Manometer,Pitot tube,Pressure transmitter,Transducer,Thermal imaging,RPM,Co,Co2,Sound level,Dust,Dewpoint,Vibration,Force,Ice Maker,Refrigerator,Moisture,Lux,Glass,Vacuum,Viscometer,MassFlow,Solra,Traverse,Airflow,Hydraulic bench,Jet impact,Orifice,Reynolds number,Pipe flow,Stability,Voltex,Flow Visuation,Venturi,Permeability,Point,Hook,Thermal conductivity,Infrared,Sensor,Calorimeter,Automotive Measurement"
        }
      />
      <div className="about">
        <table border="0" width="40%" style={{ justifySelf: "center" }}>
          <tbody>
            <tr>
              <th colSpan="3" bgcolor="#0000ff">
                <font color="#ffffff">회사 소개</font>
              </th>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>회사명</td>
              <td>씨앤브이 (Current & Velocity)</td>
            </tr>
            <tr>
              <td colSpan="2">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>로고</td>
              <td>
                <img
                  src="/logo.png"
                  alt="C&V"
                  width="250"
                  height="94"
                  align="middle"
                  border="0"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>대표</td>
              <td colSpan="2">김태환</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>설립일</td>
              <td colSpan="2">2006년 4월 25일</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>소재지</td>
              <td colSpan="2">
                서울시 은평구 진관동 은평뉴타운 우물골아파트 225동 101호
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td valign="top">주력사업</td>
              <td colSpan="2">각종 해양/환경 관련 분석 및 측정기기 판매</td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td>연락처</td>
              <td colSpan="2">
                <small>
                  전화 : 031 - 782 - 9165/6 <br></br>팩스 : 031 - 782 - 9167
                </small>
                <br></br>
                <small>
                  Homepage: www.candv.co.kr <br></br>E-mail: candvco@naver.com
                </small>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr></hr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default About;
