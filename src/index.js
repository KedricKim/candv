import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");
const app = (
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
let root = ReactDOM.createRoot(rootElement);

if (rootElement?.hasChildNodes()) {
  // 이미 child nodes가 있는 경우, 기존 root를 사용하여 업데이트
  root.hydrate(app);
} else {
  // child nodes가 없는 경우, root를 render로 초기화
  root.render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
