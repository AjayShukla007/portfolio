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
    sessionStorage.setItem("authToken", response.data.authToken);
  } catch (error) {
    console.log(error);
  }
};

export default getData;
