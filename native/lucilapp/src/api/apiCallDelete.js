import axios from "axios";
const ip = "localhost";
const port= "3000";
const baseUrl = `http://${ip}:${port}/api/`;
const apiCallDelete = async (endpoint) => {
  const url = baseUrl + endpoint
  try {
    axios.delete(url);
    
  } catch (error) {
    console.log(error)
    return [];
  }
  
}
export default apiCallDelete;