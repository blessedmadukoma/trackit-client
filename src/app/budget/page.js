"use client";
import React from "react";
import Header from "@/src/components/Header";
import { useAuth } from "@/src/context/Auth";
import { BudgetIcon } from "@/src/icons/icons";

const Budget = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <section className="mx-12 my-5">
      <Header />

      <h1 className="text-2xl font-semibold tracking-wider">Budgets</h1>

      <section className="mt-6 flex justify-center items-center space-x-10 rounded-lg bg-white py-4 text-gray-900 capitalize">
        <BudgetIcon />

        <div className="flex flex-col">
         <h1>Budget</h1>
         <p className="inline-block">#50,000.00</p>
        </div>
        <div className="flex flex-col text-[#E64C3C]">
         <h1>#5,000</h1>
         <p className="inline-block">spent</p>
        </div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </section>
    </section>
  );
};

export default Budget;
