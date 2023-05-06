import { Button, Card, Form, Input, Modal } from "antd";
import axios from "axios";
import { useState } from "react";

function ComponentEditAddress() {

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [response, setResponse] = useState<any>(null);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);

  const [modalDeleteOK, contextHolder] = Modal.useModal();
  const countDownDeleteOK = () => {
    let secondsToGo = 2;
    const instance = modalDeleteOK.success({
      title: "Datos eliminados satisfactoriamente",
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
    const payload = { ...values };
    setLoading(true);
    try {
      const responseData = await postData(payload);
      setResponse(responseData);
      form.resetFields();
      console.log("Datos encontrados", responseData);
    } catch (error: any) {
      console.error("Datos no encontrados", error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (payload: any) => {
    console.log(payload);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/addressById`,
      payload
    );
    return response.data.addressById;
  };

  const deleteData = async (payload: any) => {
    console.log(payload.id);
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/deleteAddress`,
      { id: payload.id}
    );
  };

  const handleDelete = () => {
    setVisibleModalDelete(true);
  };
  const handleCancelDelete = () => {
    setVisibleModalDelete(false);
  };
  const handleDeleteOK = () => {
      deleteData(response)
      setVisibleModalDelete(false);
      countDownDeleteOK()
  }


  return (
  <>
    <Card style={{ borderRadius: 20 }}>
      <Form onFinish={onFinish} name="form" form={form}>
        <Form.Item
          label="Buscar cédula"
          name="id"
          rules={[
            {
              required: true,
              message: "Por favor ingrese la cédula",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
          {contextHolder}
        </Form.Item>
      </Form>
    </Card>
    {response ? (
        <Card style={{ marginTop: 20 }}>
          <p><strong>Información encontrada:</strong></p>
          <p>Nombre: {response.name}</p>
          <p>CC: {response.id}</p>
          <p>Teléfono: {response.phone}</p>
          <p>Dirección: {response.address} {response.optional}</p><p></p>
          <p>Barrio: {response.neighborhood}</p>
          <p>Lugar de Votación: {response.pollingPlace}</p>
          <p>Dirección de Votación: {response.pollingAddress}</p>
          <p>Fecha de ingreso: {response.date}</p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button type="primary" style={{ marginRight: "20px" }}>Editar</Button>
            <Button type="primary" danger onClick={handleDelete}>Eliminar</Button>
          </div>
        </Card>
      ) :
      ( 
        <Card style={{ marginTop: 20 }}>
          <p><strong>Información no encontrada:</strong> La cédula no existe en la base de datos</p>
        </Card> )
    }
    <Modal
        title="Eliminando dirección..."
        open={visibleModalDelete}
        onCancel={handleCancelDelete}
        footer={null}
        maskClosable={false}
        width={500}
    >
      <br></br>
      <p>¿Estás seguro que deseas eliminar esta dirección?</p>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Button type="primary" danger onClick={handleDeleteOK} style={{ marginRight: "20px" }}>
          Sí, eliminar
        </Button>
        <Button type="primary" onClick={handleCancelDelete}>No, cancelar</Button>
        {contextHolder}
      </div>      
    </Modal>
  </>
  )
}

export default ComponentEditAddress;