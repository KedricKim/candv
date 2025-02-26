import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <table border="0" width="80%">
          <tbody>
            <tr>
              <th colspan="3" bgcolor="#0000ff">
                <font color="#ffffff">회사소개</font>
              </th>
            </tr>
            <tr>
              <td>회사명</td>
              <td>씨앤브이 (Current & Velocity)</td>
              <td rowspan="3" align="center">
                <img
                  src="./image/kenek2014.jpg"
                  border="0"
                  width="350"
                  height="263"
                />
              </td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td>로고</td>
              <td>
                <img
                  src="image/2016kenek_s.png"
                  alt="株式会社ケネック"
                  width="250"
                  height="94"
                  align="middle"
                  border="0"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>본사 위치</td>
              <td colspan="2">
                경기도 성남시 분당구 구미동 165 분당 포스빌 523호
                <br></br>
                <small>
                  전화 : 031 - 782 - 9165/6 <br></br>팩스 : 031 - 782 - 9167
                </small>
              </td>
            </tr>
            <tr>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>設立</td>
              <td colspan="2">1966年5月21日</td>
            </tr>
            <tr>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>代表取締役</td>
              <td colspan="2">松浦　隆司</td>
            </tr>
            <tr>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>資本金</td>
              <td colspan="2">1,500万円</td>
            </tr>
            <tr>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td>取引銀行</td>
              <td colspan="2">
                みずほ銀行・立川支店三井住友銀行・昭島支店西武信用金庫・中神支店多摩信用金庫・昭島支店
              </td>
            </tr>
            <tr>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td valign="top">主事業内容</td>
              <td colspan="2">
                ・水理計測器の製造・販売・特殊実験装置の製作・電子回路の設計・製作・販売・メカトロニクスのメンテナンス及び設計、製造、販売・ザイレム
                ジャパン(Xylem
                Japan)取扱店・計測器のレンタル（ポータブル流速計ほか）・公的流速検定試験（セレス検定）代行・その他
              </td>
            </tr>
            <tr>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td valign="top">社内検定設備</td>
              <td>
                ・流速測定用検定水路(最大4m/s検定対応）×1・造波器兼用検定水路×１・微流速検定水路×1・波高計用検定水槽×1・長尺波高計検定用昇降装置(最大2m)×1
              </td>
              <td rowspan="3" align="center"></td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td valign="top">その他設備</td>
              <td>
                ・社内加工用工作機械・大型低温恒温器(ADVANTEC製)・デジタルマイクロスコープ（キーエンス製）その他
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
