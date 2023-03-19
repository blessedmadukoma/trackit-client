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

  useEffect(() => {
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
  
    return () => {
      success();
      error();
      warning();
    };
  }, [messageApi]);
  

  const router = useRouter();

  useEffect(() => {
    loadUserFromCookies();
  }, []);

  async function loadUserFromCookies() {
    const token = Cookies.get("userDataToken");

    if (token) {
      toast("verifying your credentials🤔");
      console.log("Got a token in the cookies, let's see if it is valid");
      api.defaults.headers.Authorization = `Bearer ${token}`;
      try {
        const response = await api.get(
          `auth/current_user`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'Authorization': token,
  
            }
          }
        );
        let data = response.data.user;
        if (data) setUser(data);      
        toast.success("Logged in🤩");
  
        // user?.user_type === "admin"
        //   ? router.push("/admin")
        //   : user?.user_type === "client"
        //   ? router.push("/customer")
        //   : router.push("/login");
        data?.user_type == "admin" || data?.user_type == "user"
        ? router.push("/dashboard")
        : router.push("auth/login");
      } catch (err) {
        let errResponse = err?.response?.data?.error;
        // let errStatus = err?.response?.status;
        // console.log("error response:", errResponse, " => error status:", errStatus);

        if (errResponse.includes("expired")) {
          toast.error("User session expired😪");
          message.error("User session expired");
        } else if (errResponse.includes("invalid")) {
          toast.error("User session invalid:");
          message.error("User session invalid");
        } else {
          toast.error("Unable to verify user credentials😪");
          message.error("Unable to verify user credentials");
        }
        // switch (errResponse) {
        //   case errResponse.includes("expired"):
        //     console.log("expired");
        //     toast.error("User session expired😪");
        //     error("User session expired");
        //     break;
        //   case JSON.stringify(errResponse).includes("invalid"):
        //     toast.error("User session invalid:");
        //     error("User session invalid");
        //     break;
        //   default:
        //     console.log("default");
        //     break;
        // }
        Cookies.remove("userDataToken")
        // localStorage.removeItem("userDataToken");
        router.push("/auth/login");
      }
    }

    setLoading(false);
  }

  const handleLogin = async (userData) => {
    setLoading(true);
    try {
      const response = await login(userData);

      setUser(response.user)
      await loadUserFromCookies();
      // toast.success("Logged in");
      router.push("/dashboard");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Invalid credentials");
      message.error("Invalid credentials");
    }
    setLoading(false);
  };

  const handleRegister = async (userData) => {
    const response = await register(userData);
    if (response) {
      Cookies.set("userDataToken", response.token);
      setUser(response);
      router.push("auth/login");
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    Cookies.remove("userDataToken");
    setUser(null);
    setLoading(false);
    router.push("../auth/login");
    toast.success("Logged out");
    message.success("Logged out");
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
    () => router.push("/auth/login");
    return null;
  }

  return <>{children}</>;
};
