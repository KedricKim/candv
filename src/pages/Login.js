import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("ID와 비밀번호를 입력하세요.");
      return;
    }
    setError("");
    // Supabase user 테이블에서 id, pw 조회
    const { data, error: supaError } = await supabase
      .from("user")
      .select("id, pw")
      .eq("id", email)
      .eq("pw", password)
      .single();
    if (supaError || !data) {
      setError("ID 또는 비밀번호가 올바르지 않습니다.");
      return;
    }
    // 로그인 성공: 세션에 저장 후 이동
    sessionStorage.setItem("isAdminLoggedIn", "true");
    navigate("/admin", { replace: true });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-title">관리자</div>
        <form className="login-form" onSubmit={handleSubmit} autoComplete="on">
          <div>
            <input
              id="id"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ID"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              autoComplete="current-password"
              required
            />
          </div>
          {error && (
            <div style={{ color: "#dc2626", fontSize: "0.95rem" }}>{error}</div>
          )}
          <button className="login-btn" type="submit">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
