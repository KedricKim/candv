import React from "react";
import "./Estimate.css";

const Home = () => {
  return (
    <div>
      <table border="0" width="40%" style={{ justifySelf: "center" }}>
        <tbody>
          <tr>
            <th colspan="3" bgcolor="#0000ff">
              <font color="#ffffff">온라인 견적</font>
            </th>
          </tr>
          <tr>
            <td colspan="3">
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
            <td>
              <div>
                <form
                  id="mailform"
                  method="post"
                  action="mailform/send.cgi"
                  onsubmit="return sendmail(this);"
                >
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    class="mailform"
                  >
                    <tbody>
                      <tr>
                        <th>
                          <p>
                            <span style={{ color: "red" }}>*</span> 담당자
                          </p>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="confirm_email(必須)"
                            size="40"
                            class="mf"
                            style={{ width: "240px" }}
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
                            name="会社名"
                            size="40"
                            style={{ width: "240px" }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p>
                            <span style={{ color: "red" }}>*</span> 전화번호
                          </p>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="部署"
                            size="40"
                            style={{ width: "240px" }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p>
                            <span style={{ color: "red" }}>*</span> E-Mail
                          </p>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="お名前(必須)"
                            size="30"
                            style={{ width: "180px" }}
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
                            name="ふりがな(必須)"
                            size="30"
                            style={{ width: "180px" }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p>
                            <span style={{ color: "red" }}>*</span> 상담항목
                          </p>
                        </th>
                        <td>
                          <input type="radio" name="type" value="제품" /> 제품
                          <input type="radio" name="type" value="견적" /> 견적
                          <input type="radio" name="type" value="메뉴얼" />
                          메뉴얼
                          <input
                            type="radio"
                            name="type"
                            value="기타"
                            defaultChecked
                          />{" "}
                          기타 - 원하시는 상담 항목을 선택하세요.
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p>
                            <span style={{ color: "red" }}>*</span> 회신방법
                          </p>
                        </th>
                        <td>
                          <input type="radio" name="res" value="제품" /> 전화
                          <input
                            type="radio"
                            name="res"
                            value="메뉴얼"
                            defaultChecked
                          />
                          이메일 - 원하시는 상담 항목을 선택하세요.
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p>
                            <span style={{ color: "red" }}>*</span> 내용
                          </p>
                        </th>
                        <td>
                          <textarea
                            name="내용"
                            rows="10"
                            cols="70"
                            style={{ height: "120px", height: "120px" }}
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <th></th>
                        <td>
                          <input type="submit" value="견적문의" />
                          <input type="reset" name="reset" value="다시쓰기" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <link
                  rel="stylesheet"
                  href="mailform/mailform.css"
                  type="text/css"
                />
                <script
                  type="text/javascript"
                  src="mailform/mailform.js"
                  charset="utf-8"
                ></script>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
