import { Content } from "antd/es/layout/layout";
import { ProfileContentStyle } from "../styles/primaryTheme";
import { Outlet } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { Suspense } from "react";
import ComponentMap from "../components/cMap";



function Profile() {
  return (
    <>
      <Content style={ProfileContentStyle}>
        <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY}>
          <Suspense>
           <ComponentMap/>
          </Suspense>
        </LoadScript>
      </Content>
    </>
  );
}
export default Profile;
