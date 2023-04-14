import { BugFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    label: <Link to="/home/form">Formulario</Link>,
    key: "Form",
    icon: <BugFilled />,
  },
  {
    label: <Link to="/home/map">Mapa</Link>,
    key: "Map",
    icon: <BugFilled />,
  },
];