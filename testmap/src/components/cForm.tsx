import { Button, Card, DatePicker, Form, Input } from "antd";

import locale from "antd/es/date-picker/locale/es_ES";
import { useDispatch } from "react-redux";
import { addData } from "../store/reducers/dataReducer";

<DatePicker locale={locale} />;
function ComponentForm() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const serializedValues = {
      ...values,
      date: values.date.format("YYYYMMD"),
    };
    dispatch(addData(serializedValues));
    form.resetFields();
  };
  return (
    <>
      <Card style={{ borderRadius: 20 }}>
        <Form onFinish={onFinish} name="form" form={form}>
          <Form.Item label="Nombre" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Cédula" name="ID">
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
