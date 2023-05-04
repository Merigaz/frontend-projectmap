import axios from "axios";

export async function getData() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/submitform`
  );
  return response.data;
}
export async function postData(payload: any) {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/submitform`,
    payload
  );

  return response.data;
}
export async function getDataNeighborhood() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/neighborhoods`
  );
  return response.data;
}
export async function getDataDates() {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/dates`);
  return response.data;
}
export async function getDataPlaces() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/submitplace`
  );
  return response.data;
}
export async function getDatalatlng() {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/latlng`);
  return response.data;
}
export async function getDataAddress() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/addresses`
  );
  return response.data;
}
export async function getPlaces() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/places`
  );
  return response.data;
}
export async function getDataPlacesCount() {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/listplaces`
  );
  return response.data;
  }
  export async function getDataPlacesName() {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/submitplace`
    );
    return response.data;
    }