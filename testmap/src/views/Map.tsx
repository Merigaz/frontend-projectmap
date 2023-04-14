import { Col, Layout, Row  } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "../components/navBar";
import { LayoutContentStyle } from "../styles/primaryTheme";
import Logo from "../components/logo";
import { Outlet } from "react-router-dom";


function MapView() {
  return (
    <>
      <Layout style={LayoutContentStyle} >
        <Layout style={{ backgroundColor: "transparent" }}>
          <Header style={{ backgroundColor: "transparent" }}>
            <Row justify="space-around" align="top">
              <Col span={12}></Col>
              <Col span={12}>
                <Navbar />
              </Col>
            </Row>
          </Header>
          <Layout style={{ backgroundColor: "transparent", padding: "36px" }}>
            <Content ><Outlet /></Content>
            <Footer style={{ backgroundColor: "transparent" }}></Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
export default MapView;
