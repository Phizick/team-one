import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import plusImg from "../../images/plus.svg";
import stylesCreateProjectButton from "./CreateProjectButton.module.css";
export const CreateProjectButton = () => {
  return (
    <Link to="/create-project" className={stylesCreateProjectButton.link}>
      <span className={stylesCreateProjectButton.span}>
        <span className={stylesCreateProjectButton.span_button}>
          <Button type="secondary" width={48} img={plusImg}></Button>
          <p className={stylesCreateProjectButton.text}>Создать новый проект</p>
        </span>
      </span>
    </Link>
  );
};
