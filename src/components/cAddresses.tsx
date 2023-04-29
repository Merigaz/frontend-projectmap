import * as XLSX from "xlsx";
import { Button, Collapse, Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "antd/es/checkbox/Checkbox";
import { ButtonDownloadStyle } from "../styles/primaryTheme";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
const { Panel } = Collapse;

interface Address {
  Nombre: string;
  CC: string;
  Dirección: string;
  InfoAdicional: string;
  Fecha: string;
}

interface AddressData {
  neighborhood: string;
  datos: Address[];
}

const AddressesByNeighborhoods = () => {
  const [cookies] = useCookies(["authToken"]);
  const [cookies1] = useCookies(["isAdmin"]);
  const [expandIconPosition, setExpandIconPosition] = useState<"start" | "end">(
    "start"
  );
  const onPositionChange = (newExpandIconPosition: "start" | "end") => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const { AddressData } = useSelector((state: any) => state);
  const [data, setData] = useState<AddressData[]>(AddressData.AddressData);
  

  const [checkedNeighborhoods, setCheckedNeighborhoods] = useState<string[]>(
    []
  );
useEffect(() => {
    // Actualiza el estado del componente cuando cambia el estado de la tienda
    setData(AddressData.AddressData);
  }, [AddressData]);
  
  const handleDownload = async (event: any) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/markersByNeighborhoods`,
        { neighborhoods: checkedNeighborhoods },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //Arregla el array
      const newData = data.map(
        ({ _id, name, id, address, optional, neighborhood, date }:{ _id: any, name: string, id: number, address: string,optional: string, neighborhood: string, date: Date }) => ({
          NOMBRE: name,
          CÉDULA: id,
          DIRECCIÓN: address,
          INFOADICIONAL: optional,
          BARRIO: neighborhood,
          FECHA: date,
        })
      );
      // Crear el archivo de Excel y descargarlo
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(newData);
      XLSX.utils.book_append_sheet(wb, ws, "Direcciones");
      XLSX.writeFile(wb, "Barrios.xlsx");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Collapse
        activeKey={undefined}
        onChange={(key) => console.log(key)}
        expandIconPosition={expandIconPosition}
      >
        {data.map((addressData, index) => (
          <Panel
            header={
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  checked={checkedNeighborhoods.includes(
                    addressData.neighborhood
                  )}
                  onClick={(event: React.MouseEvent<HTMLInputElement>) => {
                    event.stopPropagation();
                    const isChecked = event.currentTarget.checked;
                    if (isChecked) {
                      setCheckedNeighborhoods((prevChecked) => [
                        ...prevChecked,
                        addressData.neighborhood,
                      ]);
                    } else {
                      setCheckedNeighborhoods((prevChecked) =>
                        prevChecked.filter(
                          (neighborhood) =>
                            neighborhood !== addressData.neighborhood
                        )
                      );
                    }
                  }}
                />
                <div style={{ marginLeft: 8 }}>{addressData.neighborhood}</div>
              </div>
            }
            key={index.toString()}
          >
            {addressData.datos.map((address, index) => (
              <div key={index.toString()}>
                <p>Nombre: {address.Nombre}</p>
                <p>CC: {address.CC}</p>
                <p>Dirección: {address.Dirección}</p>
                <p>{address.InfoAdicional}</p>
                <p>Fecha: {address.Fecha}</p>
                {index < addressData.datos.length - 1 && <hr />}
              </div>
            ))}
          </Panel>
        ))}
      </Collapse>
      <br />
      {cookies.authToken=="xyz" && cookies1.isAdmin=="true" ? (
            <Button
            type="primary"
            style={ButtonDownloadStyle}
            onClick={handleDownload}
          >
            Descargar información
          </Button>
          ) : null}
      <br />
    </>
  );
};

export default AddressesByNeighborhoods;
