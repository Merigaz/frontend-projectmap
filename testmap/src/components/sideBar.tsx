import { useState } from "react";
import {Menu, MenuProps } from "antd";

import { SidebarStyle } from "../styles/primaryTheme";

import { BugFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    label: <Link to="/form">Formulario</Link>,
    key: "Form",
    icon: <BugFilled />,
  },
  {
    label: <Link to="/map">Mapa</Link>,
    key: "Map",
    icon: <BugFilled />,
  },
]
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