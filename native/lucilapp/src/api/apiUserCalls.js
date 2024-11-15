import axios from "axios";
const ip = "localhost";
const port= "3000";
const baseUrl = `http://${ip}:${port}/api/`;
const apiCallLogin = async (nombre, contrasenia) => {
  const url = `${baseUrl}usuario/login`;
  const data = { nombre, contrasenia };

  let result;
  try {
    result = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return result.data;
  } catch (error) {
    console.log(error)
    return null;
  }
  
}
const apiCallRegister = async (nombre, contrasenia, mail, telefono, dni) => {
  const url = `${baseUrl}usuario/registro`;
  const data = { nombre, contrasenia, mail, telefono, dni };
  let result;
  try {
    result = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });      
    return result.data;
  } catch (error) {
    console.log(error)
    return null;
  }
  }
export default {apiCallLogin, apiCallRegister};