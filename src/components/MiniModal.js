import React from "react";
import { Modal, Button } from "@nextui-org/react";

const BudgetModal = () => {
  // for getting the values, do it how we did in the login

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="flex items-center justify-center text-center text-[#7C4CE0]">
      <div className="space-y-4">
        <h1>Create Budget</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full items-center space-y-10"
        >
          <div>
            <input
              type="text"
              id="budgetname"
              name="budgetname"
              placeholder="Enter Budget Name"
              required
              className="focus:shadow-outline text-md mt-2 h-12 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
              // value={budgetname}
              // onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Enter Amount"
              required
              className="focus:shadow-outline text-md h-12 appearance-none rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
              // value={amount}
              // onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div className="text-gray-900">
            <h3>Pick start date</h3>
            <div>
              <input
                type="date"
                id="startdate"
                name="startdate"
                required
                className="text-md focus:shadow-outline h-12 rounded-md border border-gray-300 p-2.5 leading-normal focus:bg-white focus:outline-none"
                // value={startdate}
                // onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
          </div>

          {/* blessedmadukoma@gmail.com, blessed100 */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#7C4CE08A] p-3 font-semibold tracking-wider text-white"
          >
            {/* {loading ? "Please wait..." : "Login"} */}
            Create Budget
          </button>
        </form>
      </div>
    </section>
  );
};

const ExpenseModal = () => {
  return <div>ExpenseModal</div>;
};

const IncomeModal = () => {
  return <div>IncomeModal</div>;
};

export { BudgetModal, ExpenseModal, IncomeModal };
