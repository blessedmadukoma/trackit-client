"use client";
import React from "react";
import Link from "next/link";
import { MdSpaceDashboard, MdAccountBalanceWallet } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { BsCreditCardFill } from "react-icons/bs";
import { useAuth } from "../context/Auth";

// const Sidebar = ({ prop, active }) => {
//   console.log(active);
const Sidebar = () => {
  const { handleLogout, loading } =
    useAuth();

    console.log('loading', loading);

  return (
    <main className="flex h-screen flex-col justify-between border-r-[1px]">
      <section className="flex flex-col font-medium text-[#5C5C5C]">
        {/* <Link href="/" onClick={() => prop()}> */}
        <Link href="/">
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
        </Link>
        <div className="mt-12">
          <Link href="/">
            {/* <div
              className={`${
                active === 1
                  ? "flex justify-between bg-[#CBB7F3] font-medium text-[#7C4CE0]"
                  : "mt-2 flex items-center rounded-lg py-3 px-8"
              }`}
            > */}
            <div className="flex justify-between bg-[#CBB7F3] pl-8 font-medium text-[#7C4CE0]">
              <div className="flex items-center py-3">
                <MdSpaceDashboard className="mr-2" />
                <p>Dashboard</p>
              </div>
              <div className="m-0 w-2 rounded-tl-xl rounded-bl-xl bg-[#7C4CE0]"></div>
            </div>
          </Link>

          <Link href="#">
            <div className="mt-2 flex items-center rounded-lg py-3 px-8">
              <MdAccountBalanceWallet className="mr-2" />
              <p>Budgets</p>
            </div>
          </Link>

          <Link href="#">
            <div className="mt-2 flex items-center rounded-lg py-3 px-8">
              <FaChartArea className="mr-2" />
              <p>Visualization</p>
            </div>
          </Link>

          <Link href="#">
            <div className="mt-2 flex items-center rounded-lg py-3 px-8">
              <TbArrowsLeftRight className="mr-2" />
              <p>Transaction</p>
            </div>
          </Link>

          <Link href="#">
            <div className="mt-2 flex items-center rounded-lg py-3 px-8">
              <BsCreditCardFill className="mr-2" />
              <p>Cards</p>
            </div>
          </Link>

          <div className="mt-2 flex items-center rounded-lg py-3 px-8">
            <RiLogoutCircleRFill className="mr-2" />
            {/* <p className="mr-2">Logout</p> */}
            <button className="mr-2" onClick={() => {handleLogout}}>{loading ? "Logging out..." : "Logout"}</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
