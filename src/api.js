import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "https://innovanex.com.co",
});

export default api;