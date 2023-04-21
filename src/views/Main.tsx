import { Avatar, Layout } from "antd";
import {
  HeaderStyle,
  LayoutContentStyle,
  LayoutHeaderStyle,
  LayoutStyle,
  LeftSiderContentStyle,
  LeftsiderStyle,
} from "../styles/primaryTheme";
import { Content, Header } from "antd/es/layout/layout";
import { useCookies } from "react-cookie";
import Login from "./Login";
import Profile from "./Profile";
import Sider from "antd/es/layout/Sider";
import DemoPie from "../components/chartPie";
import { Suspense } from "react";
import DemoLine from "../components/chartLine";
import NavProfile from "../components/dropdownProfile";
function Main() {
  const [cookies] = useCookies(["authToken"]);
  return (
    <>
      <Layout style={LayoutStyle}>
        <Suspense>
          {cookies["authToken"] ? (
            <Sider style={LeftsiderStyle} width={"26%"}>
              <Content style={LeftSiderContentStyle}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid black",
                    overflow: "hidden",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0px 0px 10px #343d4b",
                    height: 300,
                  }}
                >
                  <DemoPie />
                </div>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid black",
                    overflow: "hidden",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0px 0px 10px #343d4b",
                    height: 300,
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
    </>
  );
}
export default Main;
