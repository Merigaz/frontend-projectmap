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
import Navbar from "../components/navBar";
import Sider from "antd/es/layout/Sider";
import { UserOutlined } from "@ant-design/icons";

function Main() {
  const [cookies] = useCookies(["authToken"]);
  return (
    <>
      <Layout style={LayoutStyle}>
        {cookies["authToken"] ? (
          <Sider style={LeftsiderStyle} width={"24%"}><Content></Content><Content></Content><Content></Content></Sider>
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
