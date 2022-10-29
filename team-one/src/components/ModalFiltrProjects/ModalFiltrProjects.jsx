import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_FILTR_PROJECTS_MODAL } from "../../service/action";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styleModalFiltrProjects from "./ModalFiltrProjects.module.css";
import { ModalHead } from "../ModalHead/ModalHead";
const modal = document.getElementById("react-modal");
export const ModalFiltrProjects = () => {
  const { filtrProjects } = useSelector((state) => state.filtrProjects);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: CLOSE_FILTR_PROJECTS_MODAL });
  };
  return ReactDOM.createPortal(
    <ModalOverlay isActive={filtrProjects} closeModal={closeModal}>
      <div className={styleModalFiltrProjects.modal}>
        <ModalHead text="Сортировка" closeModal={closeModal} />
        <div className={styleModalFiltrProjects.div}>
          <button className={styleModalFiltrProjects.button}>
            По дате открытия
          </button>
          <button className={styleModalFiltrProjects.button}>
            По дате создания
          </button>
          <button className={styleModalFiltrProjects.button}>
            По категориям
          </button>
          <button className={styleModalFiltrProjects.button}>
            По субъектам
          </button>
          <button className={styleModalFiltrProjects.button}>По нишам</button>
        </div>
      </div>
    </ModalOverlay>,
    modal
  );
};
