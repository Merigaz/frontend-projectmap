import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/';

async function postForm() {
  const { data } = await axios.post('https://pokeapi.co/api/v2/pokemon/ditto')
  return data
}

export default postForm;