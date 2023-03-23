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
    // "Access-Control-Allow-Headers":
    //   "Origin, Content-Length, Content-Type, Authorization, X-Requested-With, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials, Access-Control-Max-Age, Access-Control-Expose-Headers, Access-Control-Request-Headers, Access-Control-Request-Method, X-Forwarded-For, X-Forwarded-Host, X-Forwarded-Port, X-Forwarded-Proto, X-Real-Ip, X-Request-Id, X-Scheme, X-Forwarded-Proto, X-Forwarded-Protocol, X-Forwarded-Ssl, X-Url-Scheme, X-Forwarded-Host, X-Forwarded-Server, X-Forwarded-For, withCredentials",
    // Accept: "application/json",
    // "content-type": "multipart/form-data",
    // Accept: "application/x-www-form-urlencoded; charset=UTF-8",
  },
});

export default api;
