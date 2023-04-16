import { Button, Card, DatePicker, Form, Input } from "antd";
import locale from "antd/es/date-picker/locale/es_ES";
import axios from "axios";
import { useState } from "react";

function ComponentForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    const serializedValues = {
      ...values,
      date: values.date.format("YYYYMMD"),
    };
    setLoading(true);
    try {
      await postData(serializedValues);
      form.resetFields();
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (payload: any) => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/submitform`, payload);
    return response.data;
  };
  return (
    <>
      <Card style={{ borderRadius: 20 }}>
        <Form onFinish={onFinish} name="form" form={form}>
          <Form.Item label="Nombre" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Cédula" name="id">
            <Input />
          </Form.Item>
          <Form.Item label="Dirección" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Barrio" name="neighborhood">
            <Input />
          </Form.Item>
          <Form.Item label="Fecha de ingreso" name="date">
            <DatePicker locale={locale} format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default ComponentForm;
