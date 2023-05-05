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
  Teléfono: string;
  Dirección: string;
  InfoAdicional: string;
  Fecha: string;
  LugardeVotación: string;
  DireccióndeVotación: string;
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

  const handleHeaderClick = () => {
    if (checkedNeighborhoods.length === data.length) {
      setCheckedNeighborhoods([]);
    } else {
      const allNeighborhoods = data.map(
        (addressData) => addressData.neighborhood
      );
      setCheckedNeighborhoods(allNeighborhoods);
    }
  };
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
      console.log(data);
      const newData = data.map(
        ({
          _id,
          name,
          id,
          phone,
          address,
          optional,
          neighborhood,
          date,
          pollingPlace,
          pollingAddress,
        }: {
          _id: any;
          name: string;
          id: number;
          phone: string;
          address: string;
          optional: string;
          neighborhood: string;
          date: Date;
          pollingPlace: string;
          pollingAddress: string;
        }) => ({
          NOMBRE: name,
          CÉDULA: id,
          TELÉFONO: phone,
          DIRECCIÓN: address,
          INFOADICIONAL: optional,
          BARRIO: neighborhood,
          LUGARDEVOTACIÓN: pollingPlace,
          DIRECCIÓNLUGARDEVOTACIÓN: pollingAddress,
          FECHA: date,
        })
      );
      // Crear el archivo de Excel y descargarlo
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(newData);
      XLSX.utils.book_append_sheet(wb, ws, "Direcciones");
      const fechaActual = new Date();
      const dia = fechaActual.getDate();
      const mes = fechaActual.getMonth() + 1;
      const anio = fechaActual.getFullYear();
      const fechaFormateada = `${dia < 10 ? "0" : ""}${dia} ${
        mes < 10 ? "0" : ""
      }${mes} ${anio}`;
      XLSX.writeFile(wb, `Barrios-${fechaFormateada}.xlsx`);
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
        <Panel
          collapsible="disabled"
          header={
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={handleHeaderClick}
            >
              <Checkbox checked={checkedNeighborhoods.length === data.length}>
                Marcar Todos
              </Checkbox>
            </div>
          }
          key="all"
          showArrow={false}
        />
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
                <p>Teléfono: {address.Teléfono}</p>
                <p>Dirección: {address.Dirección}</p>
                <p>{address.InfoAdicional}</p>
                <p>Lugar de votación: {address.LugardeVotación}</p>
                <p>Dirección de votación: {address.DireccióndeVotación}</p>
                <p>Fecha: {address.Fecha}</p>
                {index < addressData.datos.length - 1 && <hr />}
              </div>
            ))}
          </Panel>
        ))}
      </Collapse>
      <br />
      {cookies.authToken == "xyz" && cookies1.isAdmin == "true" ? (
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
