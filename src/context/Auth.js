"use client";
import { useState, useContext, useEffect, createContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import api from "../utils/api";
import { login, register, logout } from "../services/auth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { message } from "antd";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  handleLogin: () => null,
  handleRegister: () => null,
  handleLogout: () => null,
  loading: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const error = (text) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  const warning = (text) => {
    messageApi.open({
      type: "warning",
      content: text,
    });
  };

  const router = useRouter();

  useEffect(() => {
    // async function loadUserFromCookies() {
    //   const token = Cookies.get("konetBillingAdmin");

    //   if (token) {
    //     console.log("Got a token in the cookies, let's see if it is valid");
    //     api.defaults.headers.Authorization = `Bearer ${token}`;
    //     // const { data: user } = await api.get("/current_user");
    //     const { data: user } = await axios.get(
    //       `${process.env.NEXT_PUBLIC_API_URL}/current_user`,
    //       {
    //         headers: { Authorization: "Bearer " + token },
    //       }
    //     );
    //     if (user) setUser(user);
    //     console.log("user", user);

    //     user?.user_type === "admin"
    //       ? router.push("/admin")
    //       : user?.user_type === "client"
    //       ? router.push("/customer")
    //       : router.push("/login");
    //   }

    //   setLoading(false);
    // }
    loadUserFromCookies();
  }, []);
  async function loadUserFromCookies() {
    const token = Cookies.get("konetBillingAdmin");

    if (token) {
      console.log("Got a token in the cookies, let's see if it is valid");
      api.defaults.headers.Authorization = `Bearer ${token}`;
      // const { data: user } = await api.get("/current_user");
      const { data: user } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/current_user`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      if (user) setUser(user);
      console.log("user", user);

      user?.user_type === "admin"
        ? router.push("/admin")
        : user?.user_type === "client"
        ? router.push("/customer")
        : router.push("/login");
    }

    setLoading(false);
  }

  const handleLogin = async (userData) => {
    setLoading(true);
    try {
      await login(userData);
      await loadUserFromCookies();
      // console.log("Logged in", user);
      toast.success("Logged in");
      // router.push("/admin");
    } catch (err) {
      setLoading(false);
      toast.error("Invalid credentials");
      error("Invalid credentials");
    }
    setLoading(false);
  };

  const handleRegister = async (userData) => {
    const response = await register(userData);
    if (response) {
      Cookies.set("konetBillingAdmin", response.token);
      setUser(response);
      router.push("/login");
    }
  };

  const handleLogout = async () => {
    await logout();
    // Cookies.remove("konetBillingAdmin");
    setUser(null);
    router.push("/login");
    success("Logged out");
  };

  //   return context provider with the value of the state in typescript
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        handleLogin,
        handleRegister,
        handleLogout,
        loading,
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
};
