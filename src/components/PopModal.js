import { Modal } from "@nextui-org/react";
import { BudgetModal, ExpenseModal, IncomeModal } from "./Modal";

import { useEffect } from "react";

export default function PopModal({ displayPopup, setDisplayPopup }) {
  // const [displayPopup, setDisplayPopup] = useState([false, -1]);
  const index = displayPopup[1];
  const showPopup = displayPopup[0];
  useEffect(() => {}, [displayPopup]);

  console.log("displayPopup", showPopup);
  console.log("index", index);

  return (
    <Modal
      closeButton={() => setDisplayPopup([false, index])}
      toggle={() => setDisplayPopup([false, index])}
      // toggle={() => setDisplayPopup}
      open={showPopup}
    >
      {index === 1 ? (
        <ExpenseModal />
      ) : index === 2 ? (
        <IncomeModal />
      ) : index == 3 ? (
        <BudgetModal />
      ) : (
        <div></div>
      )}
    </Modal>
  );
}
