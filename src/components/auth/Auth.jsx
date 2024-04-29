const getProjectUrl = import.meta.env.VITE_API_GET_Projects;
const authUrl = import.meta.env.VITE_API_AUTH;
const conf1 = import.meta.env.VITE_API_USER;
const conf2 = import.meta.env.VITE_API_PASS;
import axios from "axios";

const getData = async () => {
  const credentials = {
    userName: conf1,
    password: conf2
  };
  try {
    const response = await axios.post(authUrl, credentials);
    // console.log(response.data);
    const headers = {
      authToken: `${response.data.authToken}`
    };
    sessionStorage.setItem("authToken", response.data.authToken);
  } catch (error) {
    console.log(error);
  }
};
// getData();



export default getData;
