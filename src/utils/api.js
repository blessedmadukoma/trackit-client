import Axios from "axios";

let urls = {
  test: process.env.NEXT_PUBLIC_API_URL,
  development: "http://localhost:8089/api/",
  production: "https://your-production-url.com/",
};
const api = Axios.create({
  baseURL: urls.development,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
    // Accept: "application/json",
    // "content-type": "multipart/form-data",
    // Accept: "application/x-www-form-urlencoded; charset=UTF-8",
  },
});

export default api;
