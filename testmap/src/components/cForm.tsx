import { Button, Card, DatePicker, Form, Input, Select, InputNumber } from "antd";
import locale from "antd/es/date-picker/locale/es_ES";
import axios from "axios";
import { useState } from "react";

function ComponentForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    select1: '',
    input1: '',
    select2: '',
    input2: '',
    input3: '',
    select3: '',
    input4: '',
    input5: ''
  });

  const onFinish = async (values: any) => {
    const markerAddress = `${formValues.select1}${formValues.input1}${formValues.select2}#${formValues.input3}${formValues.select3}-${formValues.input5}`
    /*const markerAddress = values.address .replace(
      /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?/,
      function (match: any, prefix: any, suffix: any) {
        return prefix.replace(/\d/, "") + suffix;
      }
    ); */
    const address = `${formValues.select1}${formValues.input1}${formValues.select2}${formValues.input2}#${formValues.input3}${formValues.select3}${formValues.input4}-${formValues.input5}`
  
    const payload = {
      ...values,
      address: address,
      markerAddress: markerAddress,
      date: values.date.format("YYYYMMD"),
    };
  
    setLoading(true);
  
    try {
      await postData(payload);
      form.resetFields();
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
   
 
  const postData = async (payload: any) => {
    console.log(payload)
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/submitform`,
      payload
    );
    return response.data;
  };
  return (
    <>
      <Card style={{ borderRadius: 20 }}>
        <Form onFinish={onFinish} name="form" form={form}>
          <Form.Item label="Nombre" name="name"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el nombre",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Cédula" name="id"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la cédula",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Dirección" name="address"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la dirección",
              },
            ]}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
    <Select style={{ width: 110, marginRight: 4, borderRadius: "6px" }} placeholder="Carrera"
      onChange={(value) => setFormValues({...formValues, select1: value})}
    >
      <Select.Option value="Calle" >Calle</Select.Option>
      <Select.Option value="Carrera">Carrera</Select.Option>
      <Select.Option value="Avenida">Avenida</Select.Option>
      <Select.Option value="Diagonal">Diagonal</Select.Option>
    </Select>
    <Input style={{ width: 40, marginRight: 4, borderRadius: "6px" }} placeholder="26" required
      onChange={(event) => setFormValues({...formValues, input1: event.target.value})}
    />
    <Select style={{ width: 70, marginRight: 4 }} placeholder="A"
      onChange={(value) => setFormValues({...formValues, select2: value})}
    >
      <Select.Option value=""> </Select.Option>
      <Select.Option value="A">A</Select.Option>
      <Select.Option value="B">B</Select.Option>
      <Select.Option value="C">C</Select.Option>
      <Select.Option value="D">D</Select.Option>
      <Select.Option value="E">E</Select.Option>
      <Select.Option value="F">F</Select.Option>
      <Select.Option value="G">G</Select.Option>
      <Select.Option value="sur">SUR</Select.Option>
    </Select>
    <Input style={{ width: 40, marginRight: 4, borderRadius: "6px" }} placeholder="2"
      onChange={(event) => setFormValues({...formValues, input2: event.target.value})}
    />
    <Input style={{ width: 30, marginRight: 4, border: "none", background: "transparent", color: "#000000" }} disabled value="#" />
    <Input style={{ width: 40, marginRight: 4 }} placeholder="68" required
      onChange={(event) => setFormValues({...formValues, input3: event.target.value})}
    />
    <Select style={{ width: 70, marginRight: 4 }} placeholder="B"
      onChange={(value) => setFormValues({...formValues, select3: value})}
    >
      <Select.Option value=""> </Select.Option>
      <Select.Option value="A">A</Select.Option>
      <Select.Option value="B">B</Select.Option>
      <Select.Option value="C">C</Select.Option>
      <Select.Option value="D">D</Select.Option>
      <Select.Option value="E">E</Select.Option>
      <Select.Option value="F">F</Select.Option>
      <Select.Option value="G">G</Select.Option>
      <Select.Option value="sur">SUR</Select.Option>
    </Select>
    <Input style={{ width: 40, marginRight: 4, borderRadius: "6px" }} placeholder="11" 
      onChange={(event) => setFormValues({...formValues, input4: event.target.value})}
    />
    <Input style={{ width: 30, marginRight: 4, border: "none", background: "transparent", color: "#000000" }} disabled value="-" />
    <Input style={{ width: 40, marginRight: 4, }} placeholder="55" required
      onChange={(event) => setFormValues({...formValues, input5: event.target.value})} 
    />
  </div>
          </Form.Item>
          <Form.Item label="Barrio" name="neighborhood"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el nombre del barrio",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Fecha de ingreso" name="date"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la fecha",
              },
            ]}
          >
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
