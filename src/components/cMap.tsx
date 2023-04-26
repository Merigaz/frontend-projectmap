import { GoogleMap, Marker } from "@react-google-maps/api";
import { useQuery } from "react-query";
import getData from "../hooks/useAxios";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { ComponentMapStyle } from "../styles/componentMapStyle";
import type { MenuProps } from "antd";
import {
  DatabaseOutlined,
  FormOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { SidebarStyle } from "../styles/primaryTheme";
import { Modal} from 'antd';
import ComponentForm from "./cForm";
import AddressesByNeighborhoods from "./cAddresses";

function ComponentMap() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setData(response);
    }
    fetchData();
  }, []);
  const [key, setKey] = useState("Map");
  const onClick: MenuProps["onClick"] = (e) => {
    setKey(e.key.toString());
  };
  const handleForm = () => {
    setVisible(true)
  }
  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 1);
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => prevZoom - 1);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleAddresses = () => {
      setVisible2(true)
    };
  const handleCancel2 = () => {
      setVisible2(false);
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
    {
      label: "",
      key: "AddressesByNeighborhoods",
      onClick: handleAddresses,
      icon: <DatabaseOutlined />,
    }
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
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        width={730}
      >
        <ComponentForm/>
      </Modal>
      <Modal
        title="Vista de direcciones por barrio"
        open={visible2}
        onCancel={handleCancel2}
        footer={null}
        maskClosable={false}
        width={730}
      >
        <AddressesByNeighborhoods/>
      </Modal>
    </>
  );
}

export default ComponentMap;