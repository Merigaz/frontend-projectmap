import { GoogleMap, Marker } from "@react-google-maps/api";
import { getData, getDataDates, getDataNeighborhood } from "../hooks/useAxios";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { ComponentMapStyle } from "../styles/componentMapStyle";
import type { MenuProps } from "antd";
import {
  DownloadOutlined,
  FormOutlined,
  UserOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { SidebarStyle } from "../styles/primaryTheme";
import { Modal } from "antd";
import ComponentForm from "./cForm";
import { useDispatch } from "react-redux";
import { setNeighborhoodsCount } from "../store/reducers/NeighborhoodsCountReducer";
import { setDatesCount } from "../store/reducers/DatesCountReducer";
import AddressesByNeighborhoods from "./cAddresses";
import TabsForm from "./cTab";

function ComponentMap() {
  const [key, setKey] = useState("Map");
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(12);
  const dispatch = useDispatch();

  const [visible2, setVisible2] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await getData();
    const response2 = await getDataNeighborhood();
    const response3 = await getDataDates();
    dispatch(setNeighborhoodsCount(response2));
    dispatch(setDatesCount(response3));
    setData(response);
  }

  const handleForm = () => {
    setVisible(true);
  };
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
    setVisible2(true);
  };
  const handleCancel2 = () => {
    setVisible2(false);
  };

  const iconid = {
    url: `http://hluapp.com/icon/user.png` ,
    scaledSize: new window.google.maps.Size(50, 50),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15)
  };
  const items: MenuProps["items"] = [
    {
      label: "",
      key: "Form",
      onClick: handleForm,
      icon: <FormOutlined />,
    },
    {
      label: "",
      key: "AddressesByNeighborhoods",
      onClick: handleAddresses,
      icon: <DownloadOutlined />,
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
              icon={iconid}
            />
          ))}
      </GoogleMap>
      <Modal
        afterClose={fetchData}
        title="Registro de direcciones"
        open={visible}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        width={850}
      >
        <TabsForm />
      </Modal>
      <Modal
        title="Descarga de datos"
        open={visible2}
        onCancel={handleCancel2}
        footer={null}
        maskClosable={false}
        width={730}
      >
        <br />
        <AddressesByNeighborhoods/>
      </Modal>
    </>
  );
}

export default ComponentMap;
