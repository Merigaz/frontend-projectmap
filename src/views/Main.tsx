import { ConfigProvider, Layout, Modal, Tabs } from "antd";
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
import TabPane from "antd/es/tabs/TabPane";
import DemoPiePlaces from "../components/chartPiePlaces";
import DemoPiePlaces2 from "../components/chartPiePlaces2";

function Main() {
  const [cookies] = useCookies(["authToken"]);
  const [cookies1] = useCookies(["isAdmin"]);
  const [visible, setVisible] = useState(false);
  const handleModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
    console.log("cierrate");
  };
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [activeKey, setActiveKey] = useState("1");
  const handleModal2 = () => {
    setVisible2(true);
  };
  const handleCancel2 = () => {
    setVisible2(false);
  };
  const handleModal3 = () => {
    setVisible3(true);
  };
  const handleCancel3 = () => {
    setVisible3(false);
  };
  const onChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <>
      <Layout style={LayoutStyle}>
        <Suspense>
          {cookies.authToken == "xyz" && cookies1.isAdmin == "true" ? (
            <Sider style={LeftsiderStyle} width={"26%"}>
              <Content style={LeftSiderContentStyle}>
                <ConfigProvider
                  theme={{
                    components: {
                      Tabs: {
                        colorText: "#C3B984",
                        colorPrimaryHover: "#FFFBE4",
                        colorPrimary: "#E6DEB7",
                        colorBorderSecondary: "#A49859",
                      },
                    },
                  }}
                >
                  <Tabs
                    activeKey={activeKey}
                    onChange={onChange}
                    style={{ width: "80%" }}
                  >
                    <TabPane tab={<span>Barrios</span>} key="1">
                      <div
                        onClick={handleModal2}
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: "20px",
                          border: "1px solid #A49859",
                          backdropFilter: "blur(8px)",
                          boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.8)",
                          height: 300,
                          width: "100%",
                        }}
                      >
                        <DemoPie />
                      </div>
                    </TabPane>
                    <TabPane tab={<span>Lugares de votación</span>} key="2">
                      <div
                        onClick={handleModal3}
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: "20px",
                          border: "1px solid #A49859",
                          backdropFilter: "blur(8px)",
                          boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.8)",
                          height: 300,
                          width: "100%",
                        }}
                      >
                        <DemoPiePlaces />
                      </div>
                    </TabPane>
                  </Tabs>
                </ConfigProvider>
                <div
                  onClick={handleModal}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid #A49859",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.8)",
                    height: 300,
                    width: "80%",
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
        <br />
        <div
          style={{
            borderRadius: "20px",
            border: "2px solid #A49859",
            height: "auto",
            width: "auto",
          }}
        >
          <DemoPie2 />
        </div>
      </Modal>
      <Modal
        title="Registros por lugar de votación"
        open={visible3}
        onCancel={handleCancel3}
        footer={null}
        maskClosable={false}
        width={850}
      >
        <br />
        <div
          style={{
            borderRadius: "20px",
            border: "2px solid #A49859",
            height: "auto",
            width: "auto",
          }}
        >
          <DemoPiePlaces2 />
        </div>
      </Modal>
      <Modal
        title="Registros por fecha"
        open={visible}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
        width={850}
      >
        <br />
        <div
          style={{
            borderRadius: "20px",
            border: "2px solid #A49859",
            height: "auto",
            width: "auto",
          }}
        >
          <DemoLine2 />
        </div>
      </Modal>
    </>
  );
}
export default Main;
