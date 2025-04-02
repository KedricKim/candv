import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route path="/" />
    <Route path="/about" />
    <Route path="/product" />
    <Route path="/product/list" />
    <Route path="/product/detail/:productName" />
    <Route path="/estomate" />
    <Route path="/video" />
  </Route>
);
