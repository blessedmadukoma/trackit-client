import axios from "axios";
import jsCookie from "js-cookie";
import api from "./api";

export async function postAsync(url, body) {
  const token = jsCookie.get("token");

  try {
    const response = await api.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
   console.log("error postAsync:", err)
    return Promise.reject(err);
  }
}
export async function getAsync(url) {
  const token = jsCookie.get("token");

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    return Promise.reject("Network Error");
  }
}