import React from "react";
import { BudgetModal, ExpenseModal, IncomeModal } from "./MiniModal";

const TestModal = ({ isVisible, onClose, index }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    e.preventDefault();
    if (e.target.id === "wrapper") onClose([false, -1]);
  };
  return (
    <div
      className="back fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 text-gray-900 backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex w-[600px] flex-col">
        <button
          className="place-self-end text-xl text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="rounded bg-white p-2">
          {index === 0
            ? <ExpenseModal />
            : index === 1
            ? <IncomeModal />
            : index === 2
            ? <BudgetModal />
            : () => onClose(false)}
        </div>
      </div>
    </div>
  );
};

export default TestModal;
