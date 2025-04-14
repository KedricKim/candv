import React from "react";
import { Link } from "react-router";

const ProductMain = () => {
  return (
    <>
      <tr className="text-left font-bold">
        <td colSpan="4" className="!flex !items-center my-3">
          <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
          <a>제품군</a>
        </td>
      </tr>
      <tr>
        <td className="pb-2 hover:underline hover:text-blue-700">
          <Link to={`/product/list?target=prod1`}>
            <img
              src="/product/VM-1001N.png"
              alt="VM-1001N 유속계"
              className="w-72 h-52 border border-black mx-auto"
            />
            유속계
          </Link>
        </td>
        <td className="pb-2 hover:underline hover:text-blue-700">
          <Link to={`/product/list?target=prod2`}>
            <img
              src="/product/CH-701E.png"
              alt="CH-701E 파고계"
              className="w-72 h-52 border border-black mx-auto"
            />
            파고계
          </Link>
        </td>
      </tr>
      <tr>
        <td className="pb-2 hover:underline hover:text-blue-700">
          <Link to={`/product/list?target=prod3`}>
            <img
              src="/product/P306.png"
              alt="P306 압력계"
              className="w-72 h-52 border border-black mx-auto"
            />
            압력계
          </Link>
        </td>
        <td className="pb-2 hover:underline hover:text-blue-700">
          <Link to={`/product/list?target=prod4`}>
            <img
              src="/product/6113.png"
              alt="6113 풍속계"
              className="w-72 h-52 border border-black mx-auto"
            />
            풍속계
          </Link>
        </td>
      </tr>
      <tr>
        <td className="pb-2 hover:underline hover:text-blue-700">
          <Link to={`/product/list?target=prod5`}>
            <img
              src="/product/GL260.png"
              alt="GL260 데이터로거"
              className="w-72 h-52 border border-black mx-auto"
            />
            데이터 로거
          </Link>
        </td>
        <td className="pb-2 hover:underline hover:text-blue-700">
          <Link to={`/product/list?target=prod6`}>
            <img
              src="/product/HD-10.png"
              alt="HD-10 제작 실험장치"
              className="w-72 h-52 border border-black mx-auto"
            />
            제작 실험장치
          </Link>
        </td>
      </tr>
      <tr className="text-left font-bold">
        <td colSpan="4" className="!flex !items-center mt-3">
          <img src="/icon_arrow_blue.png" alt="arrow" className="mr-2" />
          <a>Sites</a>
        </td>
      </tr>
      <tr className="text-left">
        <td colSpan="4">
          <ul className="flex [&_li]:pr-10">
            <li className="!flex !items-center">
              <img
                src="/icon_arrow_blue01.png"
                width="12px"
                alt="arrow"
                className="mr-2 ml-5"
              />
              <Link to="/about">회사소개</Link>
            </li>
            <li className="!flex !items-center">
              <img
                src="/icon_arrow_blue01.png"
                width="12px"
                alt="arrow"
                className="mr-2"
              />
              <Link to="/estimate">온라인 견적</Link>
            </li>
            <li className="!flex !items-center">
              <img
                src="/icon_arrow_blue01.png"
                width="12px"
                alt="arrow"
                className="mr-2"
              />
              <Link to="/video">참고 영상</Link>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td colSpan="4" className="py-7">
          <button className="bg-gray-200 px-2 border border-black mr-3 text-xs">
            Tel : 031-782-9165
          </button>
          <button className="bg-gray-200 px-2 border border-black text-xs">
            E-mail : candvco@naver.com
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductMain;
