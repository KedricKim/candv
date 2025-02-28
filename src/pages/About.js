import React from "react";

const About = () => {
  return (
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
              경기도 성남시 분당구 구미동 165 분당 포스빌 523호
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
                Homepage: www.candv.co.kr <br></br>E-Mail: thkim@candv.co.kr
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
  );
};

export default About;
