import { Button, Card, Form, Input, Modal } from "antd";
import {ExclamationCircleOutlined, LockOutlined,UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ButtonLoginStyle, CardLoginStyle } from "../styles/primaryTheme";
function FormLogin() {
  const [cookies, setCookie] = useCookies(["authToken"]);
  const [cookiesname, setCookiename] = useCookies(["name"]);
  const [cookiesisAdmin, setCookieisAdmin] = useCookies(["isAdmin"])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);
  const navigate = useNavigate();
  const [modalError, contextHolderError] = Modal.useModal();
  

  const errorModal = (message:any) => {
    let secondsToGo = 4;

    const instance = modalError.success({
      title: 'No se pudo iniciar sesión',
      icon: <ExclamationCircleOutlined style={{ color: 'red' }}/>,
      content: message,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
/*       instance.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      }); */
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        {
          email,
          password
        }
      );
      if (data) {
       const authToken = "xyz";
      const { name, isAdmin } = data;
  
      setCookie("authToken", authToken, {
        path: "/",
        
      });
      setCookiename("name", name, {
        path: "/",
        
      });
      setCookieisAdmin("isAdmin", isAdmin, {
        path: "/"
      });
      }
      console.log(data);
    } catch (error: any) {
      console.error(error.response.data.message);
      errorModal(error.response.data.message)
    }
  };
  return (
    <>
    <Card bordered={false} style={CardLoginStyle}>
        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onSubmitCapture={handleSubmit}
          autoComplete="on"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su correo electrónico",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Correo electrónico"
              value={email}
              onChange={handleEmailChange} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingrese su contraseña" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange} />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={ButtonLoginStyle}>
              Iniciar sesión
            </Button>
            {contextHolderError}
          </Form.Item>
        </Form>
      </Card></>
  );
}
export default FormLogin;