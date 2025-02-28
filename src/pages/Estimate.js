import React, { useRef } from "react";
import "./Estimate.css";
import emailjs from "@emailjs/browser";

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
    <div className="estimate">
      <table border="0" width="40%" style={{ justifySelf: "center" }}>
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
                  <table
                    border="0"
                    cellSpacing="0"
                    cellPadding="0"
                    className="mailform"
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
                            name="from_name"
                            size="40"
                            className="mf"
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
                            name="brand"
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
                            name="phone"
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
                            name="email"
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
                            name="product"
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
                            name="message"
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
                          &nbsp;&nbsp;
                          <input
                            id="reset"
                            type="reset"
                            name="reset"
                            value="다시쓰기"
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
  );
};

export default Estimate;
