import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styleModalUserInfo from "./ModalUserInfo.module.css";
import logout from "../../images/exit.svg";
import { Link } from "react-router-dom";
import { CLOSE_USER_INFO_MODAL } from "../../service/action";
import { ModalHead } from "../ModalHead/ModalHead";
const modal = document.getElementById("react-modal");
export const ModalUserInfo = () => {
  const dispatch = useDispatch();
  const { userName, openUserModal } = useSelector((state) => state.user);
  const logoutUser = () => {
    window.localStorage.removeItem("login");
    window.localStorage.removeItem("password");
    closeModal();
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_USER_INFO_MODAL });
  };
  return ReactDOM.createPortal(
    <ModalOverlay
      isActive={openUserModal}
      closeModal={closeModal}
      text="Профиль"
    >
      <div className={styleModalUserInfo.modal}>
        <ModalHead text="Профиль" closeModal={closeModal} />
        <p className={styleModalUserInfo.name}>{userName}</p>
        <Link className={styleModalUserInfo.link} onClick={logoutUser} to="/">
          <img className={styleModalUserInfo.img} src={logout} alt="icon" />
          Выйти
        </Link>
      </div>
    </ModalOverlay>,
    modal
  );
};
