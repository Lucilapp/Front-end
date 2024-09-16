import axios from "axios";
const ip = "localhost";
const port= "3000";
const baseUrl = `http://${ip}:${port}/api/`;
const apiCallGET = async (endpoint) => {
  const url = baseUrl + endpoint
  let result;
  try {
    result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log(error)
    return [];
  }
  
}
export default apiCallGET;