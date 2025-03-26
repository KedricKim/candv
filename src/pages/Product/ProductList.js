import React from "react";
import "./ProductList.css";
import { Link } from "react-router";

const ProductList = () => {
  return (
    <div className="productList">
      <table width="40%">
        <tbody>
          <tr>
            <th colSpan="4" bgcolor="#0000ff">
              <font color="#ffffff">유속계</font>
            </th>
          </tr>
          <tr>
            <td colSpan="4">
              <hr></hr>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <img src="/product/pr01.png" border="1" />
            </td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td colSpan="4">
              流速計とは、文字が表す通り水が流れる速さを測定する計測器です。
              　ケネックでは電磁流速計とプロペラ式流速計の２種類の測定方式をご用意！
              　模型実験など、センサーの影響を最小限にしたい精密流速計測に適したＶＭシリーズから
              　河川等の水環境調査で使いやすい直読式のポータブル型、簡単操作のプロペラ式まで用途に合わせて
              　多彩にご用意。センサー直径最小４㎜や底面設置型など用途に応じて最適な流速計をお選び頂けます。（実験室用）
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <hr></hr>
            </td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
              <img src="/icon_arrow_blue.png" />
              &nbsp; 전자기 유속계
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <table>
                <tbody>
                  <tr style={{ textAlign: "left" }}>
                    <td colSpan="2">
                      <img src="/icon_arrow_blue01.png" width="12px" />
                      &nbsp;실험실용 전자유속계
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/product/VM-1001N.png" border="1" width="200" />
                    </td>
                    <td>
                      <ul>
                        <li>
                          <Link to="/product/detail/VM-1001N">VM-1001N</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VM-801HN">VM-801HN</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VP3000">FM2001H</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VP3000">FP2200</Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td colSpan="2">
              <table>
                <tbody>
                  <tr style={{ textAlign: "left" }}>
                    <td colSpan="2">
                      <img src="/icon_arrow_blue01.png" width="12px" />
                      &nbsp; 휴대용 전자유속계
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/product/VP3000.png" border="1" width="200" />
                    </td>
                    <td>
                      <ul>
                        <li>
                          <Link to="/product/detail/VP3000">VP3000</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VP1200A">VP1200A</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/LP1100">LP1100</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VP3000">VE30</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VP3000">LP40</Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td colSpan="4">
              <hr></hr>
            </td>
          </tr>
          <tr style={{ textAlign: "left", fontWeight: "bold" }}>
            <td colSpan="4">
              <img src="/icon_arrow_blue.png" />
              &nbsp; 프로펠러식 유속계
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <table>
                <tbody>
                  <tr style={{ textAlign: "left" }}>
                    <td colSpan="2">
                      <img src="/icon_arrow_blue01.png" width="12px" />
                      &nbsp;프로펠러식 유속계
                    </td>
                  </tr>
                  <tr style={{ textAlign: "left" }}>
                    <td>
                      <img src="/product/pr04.png" border="1" />
                    </td>
                    <td>
                      <ul>
                        <li>
                          <Link to="/product/detail/VP3000">VO2301</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VP3000">VO2306</Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td colSpan="2">
              <table>
                <tbody>
                  <tr style={{ textAlign: "left" }}>
                    <td colSpan="2">
                      <img src="/icon_arrow_blue01.png" width="12px" />
                      &nbsp;휴대용 프로펠러식 유속계
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/product/pr05.png" border="1" />
                    </td>
                    <td>
                      <ul>
                        <li>
                          <Link to="/product/detail/VP3000">VO5000</Link>
                        </li>
                        <li>
                          <Link to="/product/detail/VP3000">VR-401</Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default ProductList;
