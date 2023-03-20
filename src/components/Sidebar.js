"use client";
import React from "react";
import { MdSpaceDashboard, MdAccountBalanceWallet } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { BsCreditCardFill } from "react-icons/bs";
import { useAuth } from "../context/Auth";
import { usePathname, useRouter } from "next/navigation";

// const Sidebar = ({ prop, active }) => {
//   console.log(active);
const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { handleLogout, loading } = useAuth();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    handleLogout();
  };

  const active = `flex justify-between bg-[#CBB7F3] font-medium text-[#7C4CE0]`;
  const indicator = `m-0 w-2 rounded-tl-xl rounded-bl-xl bg-[#7C4CE0]`;

  console.log("loading", loading);
  console.log("path", pathname);

  return (
    <main className="flex h-screen flex-col justify-between border-r-[1px]">
      <section className="flex flex-col font-medium text-[#5C5C5C]">
        <div
          onClick={() => router.push("/dashboard")}
          className="cursor-pointer"
        >
          <section className="flex rounded-lg p-8 text-[rgb(124,76,224)]">
            <img
              src="https://res.cloudinary.com/dqjowwy5k/image/upload/v1678804356/trackit/logo.svg"
              alt="Logo"
              className="mr-2"
            />
            <div>
              <span className="block text-2xl">TrackIT</span>
            </div>
          </section>
        </div>

        <div className="mt-12 space-y-4">
          <div
            onClick={() => router.push("/dashboard")}
            className={`${
              pathname === "/dashboard" ? active : ""
            } cursor-pointer`}
          >
            <div className="flex items-center py-3 px-8">
              <MdSpaceDashboard className="mr-2" />
              <p>Dashboard</p>
            </div>
            <div className={active ? indicator : "hidden"}></div>
          </div>

          <div
            onClick={() => router.push("/budget")}
            className={`${pathname === "/budget" ? active : ""} cursor-pointer`}
          >
            <div className="flex items-center rounded-lg py-3 px-8">
              <MdAccountBalanceWallet className="mr-2" />
              <p>Budgets</p>
            </div>
            <div
              className={pathname === "/budget" ? indicator : "hidden"}
            ></div>
          </div>

          <div
            onClick={() => router.push("/visualization")}
            className={`${
              pathname === "/visualization" ? active : ""
            } cursor-pointer`}
          >
            <div className="flex items-center rounded-lg py-3 px-8">
              <FaChartArea className="mr-2" />
              <p>Visualization</p>
            </div>
            <div
              className={pathname === "/visualization" ? indicator : "hidden"}
            ></div>
          </div>

          <div
            onClick={() => router.push("/transaction")}
            className={`${
              pathname === "/transaction" ? active : ""
            } cursor-pointer`}
          >
            <div className="flex items-center rounded-lg py-3 px-8">
              <TbArrowsLeftRight className="mr-2" />
              <p>Transaction</p>
            </div>
          </div>

          <div
            onClick={() => router.push("/cards")}
            className={`${pathname === "/cards" ? active : ""} cursor-pointer`}
          >
            <div className="flex items-center rounded-lg py-3 px-8">
              <BsCreditCardFill className="mr-2" />
              <p>Cards</p>
            </div>
            <div className={pathname === "/cards" ? indicator : "hidden"}></div>
          </div>

          <div
            className="flex items-center rounded-lg py-3 px-8"
            onClick={handleLogoutClick}
          >
            <RiLogoutCircleRFill className="mr-2" />
            <button className="mr-2">
              {loading ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
