import axios from "axios";

async function getData() {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/submitform`);
  return response.data;
}
const postData = async (payload:any) => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/submitform`, payload);
    return response.data;
};
async function getDataNeighborhood() {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/neighborhoods`);
  return response.data;
}
export default getData; postData;getDataNeighborhood;