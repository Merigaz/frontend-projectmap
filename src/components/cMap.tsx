import { GoogleMap, Marker } from "@react-google-maps/api";
import {
  getData,
  getDataDates,
  getDataNeighborhood,
  getDataPlaces,
  getDatalatlng,
} from "../hooks/useAxios";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { ComponentMapStyle } from "../styles/componentMapStyle";
import type { MenuProps } from "antd";
import {
  DownloadOutlined,
  FormOutlined,
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
  const [data2, setData2] = useState([]);
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(12);
  const dispatch = useDispatch();

  const [visible2, setVisible2] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await getDatalatlng();
    const response2 = await getDataNeighborhood();
    const response3 = await getDataDates();
    const response4 = await getDataPlaces();
    setData(response);
    dispatch(setNeighborhoodsCount(response2));
    dispatch(setDatesCount(response3));
    setData2(response4);
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
    url: `http://hluapp.com/icon/user.png`,
    scaledSize: new window.google.maps.Size(56, 86),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15),
    labelOrigin: new google.maps.Point(28, 68)
  };
  const iconplaces = {
    url: `http://hluapp.com/icon/vote.png`,
    scaledSize: new window.google.maps.Size(46, 46),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15),
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
    },
  ];

  const center = {
    lat: 10.9632,
    lng: -74.7964,
  };
  const bounds = {
    north: 11.061911,
    south: 10.892518,
    east: -74.725747,
    west: -74.886714
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
          restriction: {
            latLngBounds: bounds
          },

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
              title={marker.address}
              icon={iconid}
              options={{
                label: {
                  text: marker.count.toString(),
                  color: "#B4AB6F",
                  fontSize: "20px",
                  fontWeight: "bold",
                }
              }}
            
            />
          ))}
        {data2 &&
          data2.map((marker: any) => (
            <Marker
              key={marker._id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.name}
              icon={iconplaces}
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
        <AddressesByNeighborhoods />
      </Modal>
    </>
  );
}

export default ComponentMap;
