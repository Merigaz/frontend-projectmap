import { Layout } from "antd";
import { LayoutFooterStyle, LayoutHeaderStyle, LayoutStyle } from "../styles/primaryTheme";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useCookies } from "react-cookie";
import Login from "./Login";
import Profile from "./Profile";

function Main() {
  const [cookies] = useCookies(["authToken"]);
  return (
    <>
      <Layout style={LayoutStyle}>
        {cookies["authToken"] ? (
          // Render protected content here
          
          <Header style={LayoutHeaderStyle}></Header>
        ) : (
          // Render logout content
          <Header style={LayoutHeaderStyle}></Header>
        )}
          {cookies["authToken"] ? (
            // Render protected content here
            <Profile/>
          ) : (
            <Login />
          )}
            <Footer style={LayoutFooterStyle}></Footer>
          
        </Layout>
      
    </>
  );
}
export default Main;
