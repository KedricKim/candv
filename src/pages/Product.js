import React from "react";
import ProductMain from "./Product/ProductMain";
import MetaTag from "../SEOMetaTag";

const Product = () => {
  return (
    <>
      <MetaTag
        title={"Product | 제품소개 - 씨앤브이 (Currnt & Velocity)"}
        desc={
          "C & V에서는 계측계 측량계등 다양한 분야의 제품들을 소개 및 공급하고 있습니다. 세계 유수의 첨단 기기 제품들을 가장 저렴한 가격과 차별화된 서비스 및 기술지원으로 C & V의 독특한 고객만족 서비스를 제공받으실 수 있습니다."
        }
        keywords={
          "씨앤브이,candv,cnv,c&v,KENEK,케넥,캐낵,유속계,파고계,압력계,풍속계,데이터로거,제작실험장치,공기,물,온도,습도,압력,무게,힘,속도,풍량,풍속,환경,압력센서,개수로,적외선온도계,수리실험,분류충격,오리피스,레이놀드수,부체안정,벤츄리,관마찰,볼텍스,펠톤,가시화,투수성,포인트,훅게이지,관수로,열전도,열교환기,열전달,칼로리,회전수,소음계,이슬점,노점,수분,진공,점도,인장,압축,유량,일사,열선유속계,파고,수위,사면,수소기포,탁도,엽록소,수질,열화상,적외선,테이터처리,마노메타,냉매충진기,Wind tunnel,open channel,Wave generator,Smoke,hydrogen Bubble,Water,Pressure,Humidity,Temperature,Air velocity,Volume,Gas,Honey-comb,PH,ORP,Turbidity,Data Acquisition,Manometer,Pitot tube,Pressure transmitter,Transducer,Thermal imaging,RPM,Co,Co2,Sound level,Dust,Dewpoint,Vibration,Force,Ice Maker,Refrigerator,Moisture,Lux,Glass,Vacuum,Viscometer,MassFlow,Solra,Traverse,Airflow,Hydraulic bench,Jet impact,Orifice,Reynolds number,Pipe flow,Stability,Voltex,Flow Visuation,Venturi,Permeability,Point,Hook,Thermal conductivity,Infrared,Sensor,Calorimeter,Automotive Measurement"
        }
      />
      <div className="product">
        <table
          width="40%"
          className="justify-self-center [&_tr]:text-center [&_hr]:border-black [&_hr]:my-2"
        >
          <tbody>
            <tr>
              <th colSpan="4" bgcolor="#0000ff">
                <font color="#ffffff">제품 소개</font>
              </th>
            </tr>
            <tr>
              <td colSpan="4">
                <hr></hr>
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="text-left">
                C & V에서는 계측계 측량계등 다양한 분야의 제품들을 소개 및
                공급하고 있습니다. <br></br>세계 유수의 첨단 기기 제품들을 가장
                저렴한 가격과 차별화된 서비스 및 기술지원으로 C & V의 독특한
                고객만족 서비스를 제공받으실 수 있습니다.
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <hr></hr>
              </td>
            </tr>
            <ProductMain />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
