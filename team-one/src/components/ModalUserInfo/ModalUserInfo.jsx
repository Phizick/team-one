import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styleModalUserInfo from "./ModalUserInfo.module.css";
import logout from "../../images/exit.svg";
import { Link } from "react-router-dom";
import { CLOSE_USER_INFO } from "../../service/action";
const modal = document.getElementById("react-modal");
export const ModalUserInfo = () => {
  const dispatch = useDispatch()
  const { userName } = useSelector((state) => state.user);
  const logoutUser = () => {
    window.localStorage.removeItem("login");
    window.localStorage.removeItem("password");
    dispatch({type: CLOSE_USER_INFO})
  };
  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={styleModalUserInfo.modal}>
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
