import { GoogleMap, Marker } from "@react-google-maps/api";
import { useQuery } from "react-query";
import getData from "../hooks/useAxios";
import { Menu } from "antd";
import { useState } from "react";
import { ComponentMapStyle } from "../styles/componentMapStyle";
import type { MenuProps } from "antd";
import {
  FormOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { SidebarStyle } from "../styles/primaryTheme";
import { Modal, Button } from 'antd';
import ComponentForm from "./cForm";

function ComponentMap() {

  const [visible, setVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { data } = useQuery("markers", getData);
  const [key, setKey] = useState("Map");
  const onClick: MenuProps["onClick"] = (e) => {
    setKey(e.key.toString());
  };
  const handleForm = () => {
    setVisible(true)
    console.log(visible)
  }
  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 1);
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => prevZoom - 1);
  };
  const [zoom, setZoom] = useState(12);
  const items: MenuProps["items"] = [
    {
      label: "",
      key: "Form",
      onClick: handleForm,
      icon: <FormOutlined />,
    },
    {
      label: "",
      key: "ZoomIn",
      onClick: handleZoomIn,
      icon: <ZoomInOutlined />,
    },
    {
      label: "",
      key: "ZoomOut",
      onClick: handleZoomOut,
      icon: <ZoomOutOutlined />,
    },
  ];

  const center = {
    lat: 10.9632,
    lng: -74.7964,
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={ComponentMapStyle}
        center={center}
        zoom={zoom}
        options={{
          mapId: import.meta.env.VITE_MAP_ID,
          streetViewControl: false,
          mapTypeControl: false,
          disableDefaultUI: true,
        }}
      >
        <Menu
          selectedKeys={[key]}
          mode="horizontal"
          items={items}
          style={SidebarStyle}
        />
        {data &&
          data.map((marker: any) => (
            <Marker
              key={marker._id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.name}
            />
          ))}
      </GoogleMap>
      <Modal
  title="Registro de direcciones"
  open={visible}
  onCancel={() => setVisible(false)}
  footer={null}
  maskClosable={false}
  width={730}
>
  <ComponentForm/>
</Modal>
    </>
  );
}

export default ComponentMap;
