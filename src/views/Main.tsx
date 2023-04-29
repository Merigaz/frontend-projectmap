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
import DemoPie2 from "../components/chartPie2";
import DemoLine2 from "../components/charLine2";

function Main() {

  const [cookies] = useCookies(["authToken"]);
  const [cookies1] = useCookies(["isAdmin"]);
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
  console.log(cookies1.isAdmin)
  return (
    <>
      <Layout style={LayoutStyle}>
        <Suspense>
       
          {cookies.authToken=="xyz" && cookies1.isAdmin=="true" ? (
            <Sider style={LeftsiderStyle} width={"26%"}>
              <Content style={LeftSiderContentStyle}>
                <div
                  onClick={handleModal2}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid #A49859",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.8)",
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
                    border: "1px solid #A49859",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.8)",
                    height: 300,
                    width: "80%"
                  }}
                >
                  <DemoLine />
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
        title="Registros por barrio"
        open={visible2}
        onCancel={handleCancel2}
        footer={null}
        maskClosable={false}
        width={850}
      >
        <DemoPie2 />
      </Modal>
      <Modal
        title="Registros por fecha"
        open={visible}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        width={850}
      >
        <DemoLine2 />
      </Modal>
    </>
  );
}
export default Main;
