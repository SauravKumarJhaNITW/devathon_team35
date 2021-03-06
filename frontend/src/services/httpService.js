import axios from "axios";
import { toast } from "react-toastify";
import { log } from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    log(error);
    toast.error(error.message);
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  setJwt,
};
export default http;
