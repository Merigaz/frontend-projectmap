import axios from "axios";  

export async function getData() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/submitform`
  );
  return response.data;
};

export async function postData(payload: any) {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/submitform`,
    payload
  );

  return response.data;
};

export async function getDataNeighborhood() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/neighborhoods`
  );
  return response.data;
};
export async function getDataDates() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/dates`
  );
  return response.data;
};
