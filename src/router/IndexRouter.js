import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../NewsSandBox";
export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
              <NewsSandBox></NewsSandBox>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        {/* 如果一开始不具备token字段的，三目是假，只能走<Redirect to="/login"/>这一个 ,只要匹配不到，就会到 Login*/}
      </Switch>
    </HashRouter>
  );
}
