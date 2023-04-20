import { Avatar, Layout } from "antd";
import {
  HeaderStyle,
  LayoutContentStyle,
  LayoutHeaderStyle,
  LayoutStyle,
  LeftsiderStyle,
} from "../styles/primaryTheme";
import { Content, Header } from "antd/es/layout/layout";
import { useCookies } from "react-cookie";
import Login from "./Login";
import Profile from "./Profile";
import Sider from "antd/es/layout/Sider";
import DemoPie from "../components/chartPie";

function Main() {
  const [cookies] = useCookies(["authToken"]);
  return (
    <>
      <Layout style={LayoutStyle}>
        {cookies["authToken"] ? (
          <Sider style={LeftsiderStyle} width={"24%"}>
            <Content>
              <div
                style={{
                  backgroundColor: "rgba(255, 253, 242, 0.1)",
                  borderRadius: "20px",
                  border: "2px solid #A48C59",
                  overflow: "hidden",
                  backdropFilter: "blur(8px)",
                  boxShadow: 'inset 0px 0px 20px #343d4b'
                }}
              >
                <DemoPie />
              </div>
            </Content>
          </Sider>
        ) : null}

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
