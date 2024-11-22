import axios from "axios";
const baseDomain = "http://localhost:5001/turbocta-platform/us-central1/app";
const baseURL = `${baseDomain}`;

let axiosObj;
axiosObj = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});
export default axiosObj;
