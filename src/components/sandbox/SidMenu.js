import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
const { Sider } = Layout;

export default function SidMenu() {
  return (
    <Sider trigger={null} collapsible>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1"
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2"
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3"
          }
        ]}
      />
    </Sider>
  );
}
