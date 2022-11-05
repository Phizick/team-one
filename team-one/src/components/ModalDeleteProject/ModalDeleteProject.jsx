/**
 * @component
 * Компонент Модальное окно удаления проекта
 * Отпраляет dispatch на закрытие модального окна
 * @returns
 * возвращает разметку и кнопки УДАЛИТЬ ПРОЕКТ и ОТМЕНА
 */

import ReactDOM from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_DELETE_PROJECT_MODAL } from "../../service/action";
import { ModalHead } from "../ModalHead/ModalHead";
import styleModalDeleteProject from "./ModalDeleteProject.module.css";
import { Button } from "../Button/Button";
const modal = document.getElementById("react-modal");
export const ModalDeleteProject = () => {
  const dispatch = useDispatch();
  const { deleteProject } = useSelector((state) => state.deleteProject);
  const closeModal = () => {
    dispatch({ type: CLOSE_DELETE_PROJECT_MODAL });
  };
  return ReactDOM.createPortal(
    <ModalOverlay isActive={deleteProject} closeModal={closeModal}>
      <div className={styleModalDeleteProject.modal}>
        <ModalHead closeModal={closeModal} text="Удалить проект" />
        <p className={styleModalDeleteProject.text}>
          После удаления восстановить проект будет невозможно. Вы уверены что
          хотите удалить проект?
        </p>
        <Button
          onClick={closeModal}
          type="secondary"
          classname={styleModalDeleteProject.btn_delete}
        >
          Удалить проект
        </Button>
        <Button onClick={closeModal} type="outline">
          Отмена
        </Button>
      </div>
    </ModalOverlay>,
    modal
  );
};
