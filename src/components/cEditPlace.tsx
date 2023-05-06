import { Button, Card, Form, Input, Modal, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentEditFormPlace from "./cFormEditPlace";
import { setEditPlace } from "../store/reducers/editPlacesReduxer";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function ComponentEditPlace() {

  const dispatch = useDispatch();
  const placesName = useSelector((state: any) => state.PlacesName);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [response, setResponse] = useState<any>(null);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [modalDeleteOK, contextHolderDelete] = Modal.useModal();
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);

  const handleEdit = () => {
    setVisibleModalEdit(true);
  };
  const handleCancelEdit = () => {
    form2.resetFields()
    setVisibleModalEdit(false);
  };

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
      dispatch(setEditPlace(responseData.name));
      form.resetFields();
      console.log("Datos encontrados", responseData);
    } catch (error: any) {
      console.error("Datos no encontrados", error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (payload: any) => {
    console.log(payload.pollingPlace);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/placeByName`,
      { name: payload.pollingPlace }
    );
    return response.data.placeByName;
  };

  const deleteData = async (payload: any) => {
    console.log(payload.name);
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/deletePlace`,
      { name: payload.name}
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

  //form
  const placeName2 = useSelector((state: any) => state.EditPlace.EditPlace);
  console.log(placeName2)
  
  const [form2] = Form.useForm();
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
  
  const onFinish2 = async (values: any) => {
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
  return (
  <>
    <Card style={{ borderRadius: 20 }}>
      <Form onFinish={onFinish} name="form" form={form}>
      <Form.Item
            label="Buscar lugar de votación"
            name="pollingPlace"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la dirección",
              },
            ]}
          >
            <Select style={{ width: 230, marginRight: 4 }}>
              {/* se utiliza la función map para iterar a través de los elementos del array PlacesVote */}
              {placesName.PlacesName.map((place: any) => (
                // se renderiza una opción para cada elemento, utilizando la propiedad "name"
                <Select.Option
                  key={place._id}
                  value={place.name}
                  style={{ width: 220, marginRight: 4 }}
                >
                  {place.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
          {contextHolderDelete}
        </Form.Item>
      </Form>
    </Card>
    {response ? (
        <Card style={{ marginTop: 20 }}>
          <p><strong>Información encontrada:</strong></p>
          <p>Lugar de votación: {response.name}</p>
          <p>Dirección de votación: {response.address}</p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button type="primary" onClick={handleEdit} style={{ marginRight: "20px" }}>Editar</Button>
            <Button type="primary" danger onClick={handleDelete}>Eliminar</Button>
          </div>
        </Card>
      ) :
      ( 
        <Card style={{ marginTop: 20 }}>
          <p><strong>Información no encontrada:</strong> El lugar de votación no existe en la base de datos</p>
        </Card> )
    }
    <Modal
        title="Eliminando lugar de votación..."
        open={visibleModalDelete}
        onCancel={handleCancelDelete}
        footer={null}
        maskClosable={false}
        width={500}
    >
      <br></br>
      <p>¿Estás seguro que deseas eliminar este lugar de votación?</p>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Button type="primary" danger onClick={handleDeleteOK} style={{ marginRight: "20px" }}>
          Sí, eliminar
        </Button>
        <Button type="primary" onClick={handleCancelDelete}>No, cancelar</Button>
        {contextHolderDelete}
      </div>      
    </Modal>
    <Modal
        title="Editando lugar de votación..."
        open={visibleModalEdit}
        onCancel={handleCancelEdit}
        footer={null}
        maskClosable={false}
        width={850}
    >
      <br></br>
      <>
      <Card style={{ borderRadius: 20 }}>
        <Form onFinish={onFinish2} name="form" form={form2}>
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
    </Modal>
  </>
  )
}

export default ComponentEditPlace;