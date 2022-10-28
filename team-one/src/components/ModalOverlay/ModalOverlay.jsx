import { useDispatch, useSelector } from "react-redux";
import { CLOSE_USER_INFO } from "../../service/action";
import stylesModalOverlay from "./ModalOverlay.module.css";
export const ModalOverlay = ({ children }) => {
  const { openUserModal } = useSelector((state) => state.user);
  const classNames = require("classnames");
  const dispatch = useDispatch();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  const closeModal = () => {
    dispatch({
      type: CLOSE_USER_INFO,
    });
  };

  return (
    <div
      className={
        openUserModal === true
          ? classNames(
              stylesModalOverlay.modal_overlay,
              stylesModalOverlay.modal_overlay_active
            )
          : stylesModalOverlay.modal_overlay
      }
    >
      {children}
      <div
        className={
          openUserModal === true ? stylesModalOverlay.modal_overlay_z : ""
        }
        onClick={closeModal}
      ></div>
    </div>
  );
};
