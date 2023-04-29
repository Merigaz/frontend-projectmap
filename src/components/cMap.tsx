import { GoogleMap, Marker } from "@react-google-maps/api";
import {
  getData,
  getDataAddress,
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
  CloudDownloadOutlined,
  ContactsOutlined,
  DownloadOutlined,
  FormOutlined,
  UserOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { SidebarStyle } from "../styles/primaryTheme";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNeighborhoodsCount } from "../store/reducers/NeighborhoodsCountReducer";
import { setDatesCount } from "../store/reducers/DatesCountReducer";
import AddressesByNeighborhoods from "./cAddresses";
import TabsForm from "./cTab";
import CheckboxMenu from "./cCheckbox";
import { setMarkersMap } from "../store/reducers/MarkersMapReducer";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { setAddressData } from "../store/reducers/AddressDataReducer";

function ComponentMap() {
  const [cookies] = useCookies(["authToken"]);
  const [cookies1] = useCookies(["isAdmin"]);
  const [key, setKey] = useState("Map");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(13);
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies(["authToken"]);
  const [, , removeCookie1] = useCookies(["isAdmin"]);
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("authToken", { path: "/" });
    removeCookie1("isAdmin", { path: "/" })
    navigate("/");
  };
  const [visible2, setVisible2] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await getDatalatlng();
    const response2 = await getDataNeighborhood();
    const response3 = await getDataDates();
    const response4 = await getDataPlaces();
    const response5 = await getDataAddress();
    setData1(response);
    dispatch(setNeighborhoodsCount(response2));
    dispatch(setDatesCount(response3));
    dispatch(setMarkersMap(response));
    dispatch(setAddressData(response5));
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
  const handleRedirect = () => {
    window.open("https://wsp.registraduria.gov.co/censo/consultar", "_blank");
  };

  const iconid = {
    url: `http://hluapp.com/icon/user.png`,
    scaledSize: new window.google.maps.Size(56, 86),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15),
    labelOrigin: new google.maps.Point(28, 68),
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
      key: "Form",
      onClick: handleForm,
      icon: <FormOutlined />,
    },
    {
      label: "",
      key: "AddressesByNeighborhoods",
      onClick: handleAddresses,
      icon: <CloudDownloadOutlined />,
    },

    {
      label: "",
      key: "Consultar",
      onClick: handleRedirect,
      icon: <ContactsOutlined />,
    },
    {
      label: "",
      key: "Perfil",
      icon: <UserOutlined />,
      children: [
        {
          label: "Cerrar sesión",
          key: "1",
          onClick: handleLogout,
        },
      ],
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
    west: -74.886714,
  };
  let i = 0;
  let j = 0;
  const { NameMarkers } = useSelector((state: any) => state.NameMarkers);
  const markersToShow = NameMarkers;

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
            latLngBounds: bounds,
          },
        }}
      >
        <Menu
          selectedKeys={[key]}
          mode="horizontal"
          items={items}
          style={SidebarStyle}
        />
        {data1 &&
          (markersToShow.length === 0
            ? data1.map((marker: any) => (
                <Marker
                  key={(i = i + 2)}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  title={marker.address}
                  icon={iconid}
                  options={{
                    label: {
                      text: marker.count.toString(),
                      color: "#B4AB6F",
                      fontSize: "20px",
                      fontWeight: "bold",
                    },
                  }}
                />
              ))
            : data1.map((marker: any) =>
                markersToShow.includes(marker.neighborhood) ? (
                  <Marker
                    key={(i = i + 2)}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    title={marker.address}
                    icon={iconid}
                    options={{
                      label: {
                        text: marker.count.toString(),
                        color: "#B4AB6F",
                        fontSize: "20px",
                        fontWeight: "bold",
                      },
                    }}
                  />
                ) : null
              ))}
        {data2 &&
          data2.map((marker: any) => (
            <Marker
              key={(j = j + 2)}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.name}
              icon={iconplaces}
            />
          ))}
        <CheckboxMenu />
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
     
       {cookies.authToken=="xyz" && cookies1.isAdmin=="true" ? (
       <Modal
       title="Descarga de datos"
       open={visible2}
       onCancel={handleCancel2}
       footer={null}
       maskClosable={false}
       width={730}
     >
       <br />
       <AddressesByNeighborhoods  />
     </Modal>
      ) :   <Modal
      title="Datos direcciones"
      open={visible2}
      onCancel={handleCancel2}
      footer={null}
      maskClosable={false}
      width={730}
    >
      <br />
      <AddressesByNeighborhoods  />
    </Modal>}
      
    </>
  );
}

export default ComponentMap;
