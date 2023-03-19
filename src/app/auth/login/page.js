"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../../context/Auth";

const LogIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const { user, handleLogin, isAuthenticated, loading } = useAuth();

  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userFormData;

  const loginForm = new FormData();
  loginForm.append("email", email);
  loginForm.append("password", password);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginForm);
    console.log("user:", userFormData);
  };

  const handleInputChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="mt-10 flex max-h-screen w-full items-center justify-center p-8">
      {/* left side */}
      <section className="mt-10 w-1/2 items-center space-y-10 text-center">
        <div className="space-y-10 text-gray-900">
          <h2 className="text-2xl font-semibold">Welcome Back</h2>

          <h4 className="font-medium tracking-wide">Login into your account</h4>
        </div>

        <form onSubmit={handleSubmit} className="items-center space-y-10">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              className="focus:shadow-outline text-md mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
              value={email}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password"
              className="focus:shadow-outline text-md mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
              value={password}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div className="items-end">
            <a href="#" className="font-light underline">
              Forgot password?
            </a>
          </div>
          {/* blessedmadukoma@gmail.com, blessed100 */}
          <button
            type="submit"
            className="w-1/2 rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </section>

      {/* right side */}
      <section className="flex w-1/2 flex-col items-center justify-center space-y-8 text-center">
        <img src="../../assets/login.svg" alt="" className="h-1/2" />

        <div className="space-y-3 text-gray-900">
          <h2 className="text-xl font-normal">Don't have an account?</h2>

          <h4 className="font-extralight tracking-wide">
            Register to create an account
          </h4>
        </div>

        <Link href="/auth/register" className="w-full">
          <button className="w-1/2 rounded-lg p-3 font-semibold tracking-wider text-[#7C4CE0] outline outline-2 outline-[#7C4CE0]">
            Register
          </button>
        </Link>
      </section>
    </main>
  );
};

export default LogIn;
