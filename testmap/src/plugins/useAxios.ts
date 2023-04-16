import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL
async function getData() {
  const response = await axios.get(`${BASE_URL}/submitform`);
  return response.data;
}
const postData = async (payload:any) => {
    const response = await axios.post(`${BASE_URL}/submitform`, payload);
    return response.data;
};
export default getData; postData;