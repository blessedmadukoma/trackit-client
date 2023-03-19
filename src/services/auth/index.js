import jsCookie from "js-cookie";
import api from "../../utils/api";

export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);

  if (response.data) {
    // localStorage.setItem("userDataToken", JSON.stringify(response.data));
    jsCookie.set("userData", JSON.stringify(response.data));
  }

  return response.data;
};

export const login = async (userData) => {
  const response = await api.post(
    `auth/login`,
    userData
  );

  const token = response.data.access_token;

  if (response.data) {
    // localStorage.setItem("userData", JSON.stringify(response.data));
    jsCookie.set("userDataToken", token);
  }

  return response.data;
};

export const logout = async () => {
  // localStorage.removeItem("userDataToken");
  //   clear from cookie
  jsCookie.remove("userDataToken");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
