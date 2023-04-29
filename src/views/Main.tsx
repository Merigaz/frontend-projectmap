import { Layout, Modal } from "antd";
import {
  LayoutContentStyle,
  LayoutHeaderStyle,
  LayoutStyle,
  LeftSiderContentStyle,
  LeftsiderStyle,
} from "../styles/primaryTheme";
import { Content } from "antd/es/layout/layout";
import { useCookies } from "react-cookie";
import Login from "./Login";
import Profile from "./Profile";
import Sider from "antd/es/layout/Sider";
import DemoPie from "../components/chartPie";
import { Suspense, useState } from "react";
import DemoLine from "../components/chartLine";
import NavProfile from "../components/dropdownProfile";
import DemoPie2 from "../components/chartPie2";

function Main() {

  const [cookies] = useCookies(["authToken"]);
  const [visible, setVisible] = useState(false);
  const handleModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
    console.log("cierrate")
  };
  const [visible2, setVisible2] = useState(false);
  const handleModal2 = () => {
    setVisible2(true);
  };
  const handleCancel2 = () => {
    setVisible2(false);
  };
  return (
    <>
      <Layout style={LayoutStyle}>
        <Suspense>
          {cookies["authToken"] ? (
            <Sider style={LeftsiderStyle} width={"26%"}>
              <Content style={LeftSiderContentStyle}>
                <div
                  onClick={handleModal2}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid black",
                    overflow: "hidden",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0px 0px 10px #343d4b",
                    height: 300,
                    width: "80%"
                  }}
                >
                  <DemoPie />
                </div>
                <div
                  onClick={handleModal}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid black",
                    overflow: "hidden",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0px 0px 10px #343d4b",
                    height: 300,
                    width: "80%"
                  }}
                >
                  <DemoLine />
                </div>
                <div>
                  <NavProfile />
                </div>
              </Content>
            </Sider>
          ) : null}
        </Suspense>

        <Layout style={LayoutHeaderStyle}>
          <Layout style={LayoutContentStyle}>
            {cookies["authToken"] ? (
              // Render protected content here

              <Profile />
            ) : (
              <Login />
            )}
          </Layout>
        </Layout>
      </Layout>
      <Modal
        title="Cantidad de registros por barrio"
        open={visible2}
        onCancel={handleCancel2}
        footer={null}
        maskClosable={false}
        width={850}
      >
        <DemoPie2 />
      </Modal>
      <Modal
        title="Cantidad de registros por fecha"
        open={visible}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        width={850}
      >
      </Modal>
    </>
  );
}
export default Main;
