import { Col, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "../components/navBar";
import { HomeContentStyle, LayoutStyle } from "../styles/primaryTheme";

import { Outlet } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { Suspense } from "react";


function Home() {
  return (
    <>
      <Layout style={LayoutStyle}>
        
        <Layout style={{ backgroundColor: "transparent" }}>
          <Header style={{ backgroundColor: "transparent" }}>
            <Row justify="space-around" align="top">
              <Col span={17}></Col>
              <Col span={7}>
                <Navbar />
              </Col>
            </Row>
          </Header>
          <Layout style={{ backgroundColor: "transparent"}}>
          <Content style={HomeContentStyle}>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_API_KEY}>
              <Suspense>
                <Outlet />
              </Suspense>
            </LoadScript>
          </Content>
        <Footer style={{ backgroundColor: "transparent" }}></Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
export default Home;
