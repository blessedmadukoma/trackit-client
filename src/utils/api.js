import Axios from "axios";

let urls = {
  test: process.env.NEXT_PUBLIC_API_URL,
  development: "http://localhost:9000/",
  production: "https://your-production-url.com/",
};
const api = Axios.create({
  baseURL: urls.test,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // Accept: "application/json",
    // "content-type": "multipart/form-data",
    // Accept: "application/x-www-form-urlencoded; charset=UTF-8",
  },
});

export default api;
