import { useState } from "react";
import {Menu, MenuProps } from "antd";
import { items } from "./settings/items-sidebar";
import { SidebarStyle } from "../styles/primaryTheme";

function Sidebar() {
  const [key, setkey] = useState("key");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setkey(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[key]}
        inlineCollapsed={true}
        mode="vertical"
        items={items}
        style={SidebarStyle}
      /> 
    </>
  );
}

export default Sidebar;