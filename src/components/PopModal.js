import { Modal } from "@nextui-org/react";
import { BudgetModal, ExpenseModal, IncomeModal } from "./SideModal";

import { useEffect } from "react";

// export default function App() {
//   const [visible, setVisible] = React.useState(false);
//   const handler = () => setVisible(true);

//   const closeHandler = () => {
//     setVisible(false);
//     console.log("closed");
//   };

//   return (
//     <div>
//       <Button auto shadow onPress={handler}>
//         Open modal
//       </Button>
//       <Modal
//         closeButton
//         aria-labelledby="modal-title"
//         open={visible}
//         onClose={closeHandler}
//       >
//         <Modal.Header>
//           <Text id="modal-title" size={18}>
//             Welcome to
//             <Text b size={18}>
//               NextUI
//             </Text>
//           </Text>
//         </Modal.Header>
//         <Modal.Body>
//           <Input
//             clearable
//             bordered
//             fullWidth
//             color="primary"
//             size="lg"
//             placeholder="Email"
//             contentLeft={<Mail fill="currentColor" />}
//           />
//           <Input
//             clearable
//             bordered
//             fullWidth
//             color="primary"
//             size="lg"
//             placeholder="Password"
//             contentLeft={<Password fill="currentColor" />}
//           />
//           <Row justify="space-between">
//             <Checkbox>
//               <Text size={14}>Remember me</Text>
//             </Checkbox>
//             <Text size={14}>Forgot password?</Text>
//           </Row>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button auto flat color="error" onPress={closeHandler}>
//             Close
//           </Button>
//           <Button auto onPress={closeHandler}>
//             Sign in
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

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
