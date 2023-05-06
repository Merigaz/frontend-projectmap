import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Modal, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ComponentEditFormAddress() {

  const placeName2 = useSelector((state: any) => state.EditPlace.EditPlace);
  console.log(placeName2)
  const [nameData, setNameData] = useState<string>('')
  console.log(nameData)
  
  const [form2] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [formValues2, setFormValues2] = useState({
    select1: '',
    input1: '',
    select2: '',
    select3: '',
    input2: '',
    input3: '',
    select4: '',
    input4: '',
    input5: ''
  });

  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 2;

    const instance = modal.success({
      title: 'Datos subidos satisfactoriamente',
      
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  const [modalError, contextHolderError] = Modal.useModal();
  const errorModal = (message:any) => {
    let secondsToGo = 4;

    const instance = modalError.success({
      title: 'Ocurrió un error subiendo los datos',
      icon: <ExclamationCircleOutlined style={{ color: 'red' }}/>,
      content: message,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  
  const onFinish = async (values: any) => {
    const markerAddress = `${formValues2.select1}${formValues2.input1}${formValues2.select2}#${formValues2.select3}${formValues2.input3}${formValues2.select4}-${formValues2.input5}`

    const address = `${formValues2.select1}${formValues2.input1}${formValues2.select2}${formValues2.input2}#${formValues2.select3}${formValues2.input3}${formValues2.select4}${formValues2.input4}-${formValues2.input5}`
  
    const payload = {
      ...values,
      address: address,
      markerAddress: markerAddress
    };

    setLoading(true);
    try {
      await postData2(payload);
      form2.resetFields();
      countDown()
      console.log("Form submitted successfully");
    } catch (error:any) {
      console.error("Error subiendo datos:", error);
      errorModal(error.response.data.mensaje)
    } finally {
      setLoading(false);

    }
  };
   
 
  const postData2 = async (payload: any) => {
    console.log(payload)
    const response2 = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/submitplace`,
      payload
    );
    return response2.data;
  };

  useEffect(() => {
    // Aquí actualizamos la variable placeName con el nuevo estado del store
    const newPlaceName = placeName2;
    // Y luego hacemos lo que necesitemos con la nueva variable placeName
    setNameData(newPlaceName)
    console.log('La variable placeName se actualizó:', newPlaceName);
  }, [placeName2]);
  return (
    <>
      <Card style={{ borderRadius: 20 }}>
        <Form onFinish={onFinish} name="form" form={form2}>
          <Form.Item label="Lugar" name="name"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el nombre del lugar de votación",
              },
            ]}
          >
            <Input defaultValue={placeName2} />
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
      onChange={(value) => setFormValues2({...formValues2, select1: value})}
    >
      <Select.Option value="Calle" >Calle</Select.Option>
      <Select.Option value="Carrera">Carrera</Select.Option>
      <Select.Option value="Avenida">Avenida</Select.Option>
      <Select.Option value="Diagonal">Diagonal</Select.Option>
      <Select.Option value="Transversal">Transversal</Select.Option>
    </Select>
    <Input style={{ width: 50, marginRight: 4, borderRadius: "6px" }} placeholder="26" required
      onChange={(event) => setFormValues2({...formValues2, input1: event.target.value})}
    />
    <Select style={{ width: 70, marginRight: 4 }} placeholder="A"
      onChange={(value) => setFormValues2({...formValues2, select2: value})}
    >
      <Select.Option value=""> </Select.Option>
      <Select.Option value="A">A</Select.Option>
      <Select.Option value="B">B</Select.Option>
      <Select.Option value="C">C</Select.Option>
      <Select.Option value="D">D</Select.Option>
      <Select.Option value="E">E</Select.Option>
      <Select.Option value="F">F</Select.Option>
      <Select.Option value="G">G</Select.Option>
      <Select.Option value="H">H</Select.Option>
      <Select.Option value="I">I</Select.Option>
      <Select.Option value="J">J</Select.Option>
      <Select.Option value="K">K</Select.Option>
      <Select.Option value="L">L</Select.Option>
      <Select.Option value="sur">SUR</Select.Option>
    </Select>
    <Input style={{ width: 40, marginRight: 4, borderRadius: "6px" }} placeholder="2"
      onChange={(event) => setFormValues2({...formValues2, input2: event.target.value})}
    />
    <Input style={{ width: 30, marginRight: 4, border: "none", background: "transparent", color: "#000000" }} disabled value="#" />
    <Select style={{ width: 110, marginRight: 4, borderRadius: "6px" }} placeholder="Carrera"
      onChange={(value) => setFormValues2({...formValues2, select3: value})}
    >
      <Select.Option value="Calle" >Calle</Select.Option>
      <Select.Option value="Carrera">Carrera</Select.Option>
      <Select.Option value="Avenida">Avenida</Select.Option>
      <Select.Option value="Diagonal">Diagonal</Select.Option>
      <Select.Option value="Transversal">Transversal</Select.Option>
    </Select>
    <Input style={{ width: 50, marginRight: 4 }} placeholder="68" required
      onChange={(event) => setFormValues2({...formValues2, input3: event.target.value})}
    />
    <Select style={{ width: 70, marginRight: 4 }} placeholder="B"
      onChange={(value) => setFormValues2({...formValues2, select4: value})}
    >
      <Select.Option value=""> </Select.Option>
      <Select.Option value="A">A</Select.Option>
      <Select.Option value="B">B</Select.Option>
      <Select.Option value="C">C</Select.Option>
      <Select.Option value="D">D</Select.Option>
      <Select.Option value="E">E</Select.Option>
      <Select.Option value="F">F</Select.Option>
      <Select.Option value="G">G</Select.Option>
      <Select.Option value="H">H</Select.Option>
      <Select.Option value="I">I</Select.Option>
      <Select.Option value="J">J</Select.Option>
      <Select.Option value="K">K</Select.Option>
      <Select.Option value="L">L</Select.Option>
      <Select.Option value="sur">SUR</Select.Option>
    </Select>
    <Input style={{ width: 40, marginRight: 4, borderRadius: "6px" }} placeholder="11" 
      onChange={(event) => setFormValues2({...formValues2, input4: event.target.value})}
    />
    <Input style={{ width: 30, marginRight: 4, border: "none", background: "transparent", color: "#000000" }} disabled value="-" />
    <Input style={{ width: 50, marginRight: 4, }} placeholder="55" required
      onChange={(event) => setFormValues2({...formValues2, input5: event.target.value})} 
    />
  </div>
          </Form.Item>
          <br />
          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
            {contextHolder}
            {contextHolderError}
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default ComponentEditFormAddress;
