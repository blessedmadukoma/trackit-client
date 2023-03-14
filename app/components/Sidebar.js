import React from "react";
import Link from "next/link";
import { MdDashboard, MdEditNote } from "react-icons/md";
import { FaToggleOn } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsMoonFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="h-screen w-48 border-r-[1px] flex flex-col justify-between">
      <section className="flex flex-col text-[#5C5C5C] font-medium">
        <Link href="/">
          <div className="rounded-lg text-[#7C4CE0] flex  p-8">
            <img
              src="https://res.cloudinary.com/dqjowwy5k/image/upload/v1678804356/trackit/logo.svg"
              alt="Logo"
              className="mr-2"
            />
            <div>
              <span className="text-2xl block">TrackIT</span>
            </div>
          </div>
        </Link>
        <div className="mt-12">
          <Link href="/">
            <div className="bg-[#CBB7F3] text-[#7C4CE0] font-medium p-3  px-8 flex items-center">
              <MdDashboard className="mr-2" />
              <p>Dashboard</p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="mt-4 p-3 px-8 ounded-lg flex  items-center">
              <AiOutlineFundProjectionScreen className="mr-2" />
              <p>Budgets</p>
            </div>
          </Link>

          <Link href="/tasks">
            <div className="mt-4 p-3  px-8 rounded-lg flex  items-center">
              <BiTask className="mr-2" />
              <p>Visualization</p>
            </div>
          </Link>

          <Link href="/calendar">
            <div className="mt-4 p-3  px-8 rounded-lg flex  items-center">
              <BsFillCalendarWeekFill className="mr-2" />
              <p>Transaction</p>
            </div>
          </Link>

          <Link href="/notes">
            <div className="mt-4 p-3  px-8 rounded-lg flex  items-center">
              <MdEditNote className="mr-2" />
              <p>Cards</p>
            </div>
          </Link>

          <Link href="#">
            <div className="mt-4 p-3  px-8 rounded-lg flex  items-center">
              <BsMoonFill className="mr-2" />
              <p className="mr-2">Logout</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
