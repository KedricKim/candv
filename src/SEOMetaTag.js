import { Helmet } from "react-helmet-async";

const MetaTag = ({ title, desc, keywords }) => {
  return (
    <Helmet>
      <meta
        name="google-site-verification"
        content={`${process.env.REACT_APP_GOOGLE_SEO}`}
      />
      <meta
        name="naver-site-verification"
        content={`${process.env.REACT_APP_NAVER_SEO}`}
      />
      <title>{title || "씨앤브이 (Currnt & Velocity)"}</title>
      <meta
        name="title"
        content={`${title || "씨앤브이 (Currnt & Velocity)"}`}
      ></meta>
      <meta
        name="description"
        content={`${
          desc ||
          "폐사는 일본 KENEK사의 한국 SOLE AGENT입니다. KENEK사에서 생산되는 모든 제품을 저렴한 가격으로 공급하고 있습니다.candv,cnv,c&v,kenek,케넥,유속계,파고계,압력계,풍속계,씨앤브이"
        } `}
      ></meta>
      <meta
        name="keywords"
        content={`${
          keywords ||
          "씨앤브이,candv,cnv,c&v,KENEK,케넥,캐낵,유속계,파고계,압력계,풍속계,데이터로거,제작실험장치,공기,물,온도,습도,압력,무게,힘,속도,풍량,풍속,환경,압력센서,개수로,적외선온도계,수리실험,분류충격,오리피스,레이놀드수,부체안정,벤츄리,관마찰,볼텍스,펠톤,가시화,투수성,포인트,훅게이지,관수로,열전도,열교환기,열전달,칼로리,회전수,소음계,이슬점,노점,수분,진공,점도,인장,압축,유량,일사,열선유속계,파고,수위,사면,수소기포,탁도,엽록소,수질,열화상,적외선,테이터처리,마노메타,냉매충진기,Wind tunnel,open channel,Wave generator,Smoke,hydrogen Bubble,Water,Pressure,Humidity,Temperature,Air velocity,Volume,Gas,Honey-comb,PH,ORP,Turbidity,Data Acquisition,Manometer,Pitot tube,Pressure transmitter,Transducer,Thermal imaging,RPM,Co,Co2,Sound level,Dust,Dewpoint,Vibration,Force,Ice Maker,Refrigerator,Moisture,Lux,Glass,Vacuum,Viscometer,MassFlow,Solra,Traverse,Airflow,Hydraulic bench,Jet impact,Orifice,Reynolds number,Pipe flow,Stability,Voltex,Flow Visuation,Venturi,Permeability,Point,Hook,Thermal conductivity,Infrared,Sensor,Calorimeter,Automotive Measurement"
        }`}
      ></meta>
      <meta name="robots" content="index, follow"></meta>
    </Helmet>
  );
};

export default MetaTag;
