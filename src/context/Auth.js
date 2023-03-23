"use client";
import { useState, useContext, useEffect, createContext, useRef } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import api from "../utils/api";
import { login, register, logout } from "../services/auth";
import toast, { Toaster } from "react-hot-toast";
import { message } from "antd";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  handleLogin: () => null,
  handleRegister: () => null,
  handleLogout: () => null,
  handleAddExpense: () => null,
  loading: false,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [expense, setExpense] = useState();

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
        const { data: user } = await api.get(`auth/current_user`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        // let data = user?.user;

        if (user) setUser(user);

        toast.success("Logged in🤩");
        console.log("user load", user);

        // data?.user_type == "admin" || data?.user_type == "user"
        //   ? usePreviousRoute()
        //   : router.push("auth/login");

        // user && router.push("/dashboard");
      } catch (err) {
        let errResponse = err?.response?.data?.error;

        if (errResponse.includes("expired")) {
          toast.error("User session expired😪");
          message.error("User session expired");
        } else if (errResponse.includes("invalid")) {
          toast.error("User session invalid:");
          message.error("User session invalid");
        } else if (err?.response?.status === 500) {
          toast.error("Server Error");
          message.error("Server Error");
        } else {
          toast.error("Unable to verify user credentials😪");
          message.error("Unable to verify user credentials");
        }
        Cookies.remove("userDataToken");
        // localStorage.removeItem("userDataToken");
        router.push("/auth/login");
        return;
      }
    }

    // console.log("user load", user?.user);
    setLoading(false);
  }

  const handleLogin = async (userData) => {
    setLoading(true);
    try {
      const response = await login(userData);

      setUser(response.user);
      await loadUserFromCookies();
      // toast.success("Logged in");
      router.push("/dashboard");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err?.message === "Network Error") {
        toast.error("Network Error");
        message.error("Network Error");
        return;
      } else if (err?.response?.status === 401) {
        toast.error("Invalid credentials");
        message.error("Invalid credentials");
        return;
      } else if (err?.response?.status === 500) {
        toast.error("Server Error");
        message.error("Server Error");
        return;
      } else if (err?.response?.status === 403) {
        toast.error("Forbidden");
        message.error("Forbidden");
        return;
      } else if (err?.response?.status === 429) {
        toast.error("Too Many Requests");
        message.error("Too Many Requests");
        return;
      }

      console.log("error", err);
      toast.error("Invalid credentials");
      message.error("Invalid credentials");
      return;
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

  const handleAddExpense = async (expenseData) => {
    setLoading(true);
    try {
      // let response = await addExpense(expenseData);

      const token = Cookies.get("userDataToken");
      api.defaults.headers.Authorization = `Bearer ${token}`;

      const { data: expense } = await api.post("/user/expense", expenseData, {
        headers: {
          Authorization: token,
        },
      });

      // console.log("response in addexpense =>", response);

      setExpense(expense);
      console.log("response in addexpense =>", expense);
      // return expense;
    } catch (err) {
      setLoading(false);
      if (err?.message === "Network Error") {
        toast.error("Network Error");
        message.error("Network Error");
        return;
      } else if (err?.response?.status === 401) {
        toast.error("Invalid credentials");
        message.error("Invalid credentials");
        return;
      } else if (err?.response?.status === 500) {
        toast.error("Server Error");
        message.error("Server Error");
        return;
      } else if (err?.response?.status === 403) {
        toast.error("Forbidden");
        message.error("Forbidden");
        return;
      } else if (err?.response?.status === 429) {
        toast.error("Too Many Requests");
        message.error("Too Many Requests");
        return;
      }

      console.log("error", err);
      toast.error("Invalid credentials");
      message.error("Invalid credentials");
      return;
    }
    setLoading(false);

    return expense;
  };

  //   return context provider with the value of the state in typescript
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        expense,
        handleLogin,
        handleRegister,
        handleLogout,
        loading,
        handleAddExpense,
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

export const usePreviousRoute = () => {
  const { asPath } = useRouter();

  const ref = useRef(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return ref.current;
};
