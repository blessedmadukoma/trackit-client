import { useState } from "react";
import { Modal, Button } from "@nextui-org/react";
import { BudgetModal, ExpenseModal, IncomeModal } from "./SideModal";

export default function PopModal({ displayPopup, setDisplayPopup }) {
  // const [displayPopup, setDisplayPopup] = useState([false, -1]);

  const index = displayPopup[1];

  return (
    <Modal
      toggle={() => setDisplayPopup([false, -1])}
      open={displayPopup[0]}
      // open={true}
    >
      <div className="modal-header flex justify-between p-3">
        <h5 className="font-bold" id="exampleModalLabel">
          Title
        </h5>
      </div>
      <Modal.Body>
        {index === 1 ? (
          <ExpenseModal />
        ) : index === 2 ? (
          <IncomeModal />
        ) : index == 3 ? (
          <BudgetModal />
        ) : (
          <div></div>
        )}
      </Modal.Body>
      <Modal.Footer justify="space-between">
        <p className="bg-primary-orange text-primary-orange rounded bg-opacity-20 px-5 py-2 ">
          This is the mode
        </p>
        <Button
          className="bg-primary-orange rounded-xl py-3 px-7 text-white"
          type="button"
          onClick={() => setDisplayPopup([false, -1])}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
