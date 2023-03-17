import jsCookie from "js-cookie";
import api from "../../utils/api";

export const register = async (userData) => {
  const response = await api.post("/admin/signup", userData);

  if (response.data) {
    localStorage.setItem("konetBillingAdmin", JSON.stringify(response.data));
  }

  return response.data;
};

export const login = async (userData) => {
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    userData
  );

  const token = response.data.access_token;

  if (response.data) {
    localStorage.setItem("konetBillingAdmin", JSON.stringify(response.data));
    jsCookie.set("konetBillingAdmin", token);
  }

  console.log("login", response.data);

  return response.data;
};

export const logout = async () => {
  localStorage.removeItem("konetBillingAdmin");
  //   clear from cookie
  jsCookie.remove("konetBillingAdmin");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
