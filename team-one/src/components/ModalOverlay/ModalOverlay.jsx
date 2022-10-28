import { useDispatch, useSelector } from "react-redux";
import { CLOSE_USER_INFO } from "../../service/action";
import stylesModalOverlay from "./ModalOverlay.module.css";
export const ModalOverlay = ({ children }) => {
  const { openUserModal } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dispatch({
        type: CLOSE_USER_INFO,
      });
    }
  });
  const closeModal = () => {
    dispatch({
      type: CLOSE_USER_INFO,
    });
  };
  return (
    <div
      onClick={closeModal}
      className={openUserModal === true ? stylesModalOverlay.modal_overlay : ""}
    >
      <div className={stylesModalOverlay.modal}>{children}</div>
    </div>
  );
};
