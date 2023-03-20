"use client";
import React from "react";
import Header from "@/src/components/Header";
import { useAuth } from "@/src/context/Auth";
import { BudgetIcon, EditIcon, DeleteIcon } from "@/src/icons/icons";

const Budget = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <section className="mx-12 my-5">
      <Header />

      <h1 className="text-2xl font-semibold tracking-wider">Budgets</h1>

      <section className="mt-6 flex items-center rounded-lg bg-white py-4 pl-4 capitalize text-gray-900">
        <BudgetIcon className="block" />

        <section className="flex flex-1 items-center justify-between px-8">
          <div className="flex flex-col space-y-1">
            <h1 className="font-medium">Budget 1</h1>
            <p className="inline-block text-sm font-light">&#8358;50,000.00</p>
          </div>

          <div className="flex flex-col space-y-1 text-center text-sm font-light  text-[#E64C3C]">
            <h1>&#8358;5,000.00</h1>
            <p className="inline-block">spent</p>
          </div>

          <div className="flex flex-col space-y-1 text-center text-sm font-light  text-[#00BF76]">
            <h1>&#8358;45,000.00</h1>
            <p className="inline-block">left</p>
          </div>

          <div className="flex space-x-5">
            <div className="cursor-pointer">
              <EditIcon />
            </div>
            <div className="cursor-pointer">
              <DeleteIcon />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Budget;
