import axios from 'axios';
import store from "./context/store";
// axios.defaults.baseURL = "http://157.230.190.229:80/api/";
const isProd = process.env.NODE_ENV === "production";


axios.defaults.baseURL = isProd
  ? "https://ims.crionline.africa/api/"
  : "http://localhost:7000/api/";

axios.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user?.user?.token;
  if (token) config.headers.Authorization = `Bearer ${state.user?.user?.token}`;
  return config;
});
const responseBody = (response) => response.data;
const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body = {}) => axios.post(url, body).then(responseBody),
    put: (url, body = {}) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
}

export default requests;