import type { MenuProps } from "antd";
import { BugFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const [zoom, setZoom] = useState(12);
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
  {
    label: "+",
    key: "ZoomIn",
    onClick: (handleZoomIn) => {
      setZoom((prevZoom) => prevZoom + 1);
    }},]
      