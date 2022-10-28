import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styleModal from "./Modal.module.css";
const modal = document.getElementById("react-modal");
export const Modal = () => {
  const { openUserModal } = useSelector((state) => state.user);
  return ReactDOM.createPortal(
    <ModalOverlay>
      {openUserModal === true ? (
        <div className={styleModal.modal}>
          <h1>title</h1>
        </div>
      ) : (
        ""
      )}
    </ModalOverlay>,
    modal
  );
};
