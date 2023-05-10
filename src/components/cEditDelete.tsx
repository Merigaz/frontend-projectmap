import React, { useEffect, useState } from "react";
import { Card, Form, Select } from "antd";
import ComponentEditAddress from "./cEditAddress";
import ComponentEditPlace from "./cEditPlace";

const { Option } = Select;

function ComponentEditDelete() {
  const [formType, setFormType] = useState("");

  const handleFormTypeChange = (value: string) => {
    setFormType(value);
  };

  const renderForm = () => {
    switch (formType) {
      case "findID":
        return <ComponentEditAddress />;
      case "findPlace":
        return <ComponentEditPlace />;
      default:
        return null;
    }
  };

  const resetForm = () => {
    setFormType("");
  };

  useEffect(() => {
    resetForm();
  }, []);


  return (
    <Card >
      <Form layout="vertical">
        <Form.Item label="Selecciona una opción">
          <Select value={formType} onChange={handleFormTypeChange}>
            <Option value="findID">Buscar cédula</Option>
            <Option value="findPlace">Buscar lugar de votación</Option>
          </Select>
        </Form.Item>
      </Form>
      {renderForm()}
    </Card>
  );
};

export default ComponentEditDelete;