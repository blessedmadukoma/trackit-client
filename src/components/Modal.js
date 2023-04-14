import React from "react";
import { Modal, Button } from "@nextui-org/react";

const BudgetModal = () => {
  // for getting the values, do it how we did in the login

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="items-center justify-center text-[#7C4CE0]">
      <Modal.Header>
        <h1 className="text-xl font-semibold text-[#7C4CE0]">Create Budget</h1>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className="flex flex-col text-center items-center justify-center">
          <div>
            <label htmlFor="budgetname">Enter Budget Name</label>
            <input type="text" placeholder="Enter Budget Name" />
          </div>

          <div>
            {/* <label htmlFor="amount">Enter Amount</label> */}
            <input type="text" placeholder="Enter Amount" className="border border-b-red-500 border-b-2" />
          </div>

          <div>
            <h4 htmlFor="startdate">Pick a start date</h4>
            <input type="date" placeholder="Enter Date" />
          </div>
        </Modal.Body>
        <Modal.Footer className="items-center">
          <Button
            className="w-full rounded-xl bg-[#7C4CE08A] py-3 text-white"
            type="button"
            // onClick={() => setDisplayPopup([false, -1])}
          >
            Create Budget
          </Button>
        </Modal.Footer>
      </form>
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
