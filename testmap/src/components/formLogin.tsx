import { Button, Card, Form, Input } from "antd";
import { EyeInvisibleOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function FormLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  
  try {
    const { data } = await axios.post('', {
      email,
      password
    }
    );
    if (data) {
      navigate('/form')
    }
    console.log(data);
  } catch (error) {
    console.error(error);
  }}
  return (
   
    
      <Card bordered={false} style={{}}>
        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onSubmitCapture={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ message: "Please input your username!" }]}
          >
            <Input
              prefix={<MailOutlined />}
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ message: "Please input your password!" }]}
          >
            <Input
              prefix={<EyeInvisibleOutlined />}
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    
  );
}
export default FormLogin;
