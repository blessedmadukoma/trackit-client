"use client";
import Link from "next/link";
import { useAuth } from "@/src/context/Auth";
import { useState } from "react";

const Register = () => {
  const { handleRegister, loading } = useAuth();

  const [userFormData, setUserFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  
  const { firstname, lastname, email, phone, password } = userFormData;
  
  const registerForm = new FormData();
  registerForm.append("firstname", firstname);
  registerForm.append("lastname", lastname);
  registerForm.append("email", email);
  registerForm.append("phone", phone);
  registerForm.append("password", password);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(registerForm);
    console.log("user:", userFormData);
  }
  
  const handleInputChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <main className="mt-5 flex max-h-screen w-full items-center justify-center p-8">
      {/* left side */}
      <section className="flex w-1/2 flex-col items-center justify-center space-y-10 text-center">
        <img src="../../assets/register.svg" alt="" className="h-1/2" />

        <div className="space-y-2 text-gray-900">
          <h2 className="text-xl font-normal">Already have an account?</h2>

          <h4 className="font-extralight tracking-wide">
            Login back to your account
          </h4>
        </div>

        <Link href="/auth/login" className="w-full">
          <button className="w-1/2 rounded-lg outline outline-2 outline-[#7C4CE0] p-3 font-semibold tracking-wider text-[#7C4CE0]">
            Login
          </button>
        </Link>
      </section>

      {/* right side */}
      <section className="w-1/2 items-center space-y-8 text-center ml-10">
        <div className="space-y-4 text-gray-900">
          <h2 className="text-2xl font-semibold">Create Account</h2>

          <h4 className="font-normal tracking-wide">
            Register To Keep Track of Your Money
          </h4>
        </div>

        <form className="items-center space-y-10" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            className="focus:shadow-outline text-md mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
            value={firstname}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            className="focus:shadow-outline mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 text-md leading-normal focus:bg-white focus:outline-none"
            value={lastname}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="focus:shadow-outline mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 text-md leading-normal focus:bg-white focus:outline-none"
            value={email} 
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="focus:shadow-outline mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 text-md leading-normal focus:bg-white focus:outline-none"
            value={phone}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="focus:shadow-outline mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 text-md leading-normal focus:bg-white focus:outline-none"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="password"
            id="confirm"
            name="confirm"
            placeholder="Confirm Password"
            className="focus:shadow-outline mt-2 h-12 w-3/4 appearance-none rounded-md border border-gray-300 p-2.5 text-md leading-normal focus:bg-white focus:outline-none"
          />
        </div>

        <div className="font-light text-sm flex items-center text-left justify-center">
          <input type="checkbox" className="rounded-3xl p-4 h-5 w-5 mr-2" />
          <span className="flex-wrap">
            By clicking the checkbox, you agree to the Terms and Conditions
          </span>
        </div>

        <button className="w-1/2 rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white">
          Register
        </button>
      </form>
      </section>
    </main>
  );
};

export default Register;
