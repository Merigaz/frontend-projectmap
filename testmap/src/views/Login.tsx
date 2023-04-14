import { Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import {LoginContentStyle } from "../styles/primaryTheme";
import FormLogin from "../components/formLogin";

function Login() {
  return (
    <>
      <Layout>
        <Content style={LoginContentStyle}>
          <FormLogin />
        </Content>
      </Layout>
    </>
  );
}
export default Login;
