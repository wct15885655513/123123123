import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import TopHeader from "./components/sandbox/TopHeader";
import SidMenu from "./components/sandbox/SidMenu";
import Home from "./views/sandbox/home/Home";
import RightList from "./views/sandbox/right-manage/RightList";
import RoleList from "./views/sandbox/right-manage/RoleList";
import UserList from "./views/sandbox/user-manage/UserList";
import NoPermission from "./views/sandbox/nopermission/NoPermission";

//css
import "./views/sandbox/NewsSandBox.css";
//antd
const { Content } = Layout;
export default function NewsSandBox() {
  return (
    <Layout>
      <SidMenu></SidMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user-manage/list" component={UserList} />
            <Route path="/right-manage/role/list" component={RoleList} />
            <Route path="/right-manage/right/list" component={RightList} />
            <Redirect from="/" to="/home" exact />
            <Route path="*" component={NoPermission} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
