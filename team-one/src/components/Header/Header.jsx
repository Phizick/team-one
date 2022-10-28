import { Button } from "../Button/Button";
import styleHeader from "./Header.module.css";
import user from "../../images/user.svg";
import { useDispatch } from "react-redux";
import { OPEN_USER_INFO } from "../../service/action";
export const Header = () => {
  const userLogin = window.localStorage.getItem("login");
  const dispatch = useDispatch();
  const getUserInfoFunction = () => {
    dispatch({
      type: OPEN_USER_INFO,
      payload: userLogin,
    });
  };
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.profile} onClick={getUserInfoFunction}>
        <Button type="primary" width={48} img={user} />
        <p className={styleHeader.profile_name}>{userLogin}</p>
      </div>
      <div className={styleHeader.button}>
        <Button type="primary" width={210}>
          Получить рекомендацию
        </Button>
      </div>
    </header>
  );
};
