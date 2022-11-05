/**
 * @component
 * Компонент Модальное окно выбора субъектов РФ
 * Отпраляет dispatch на закрытие модального окна
 * @returns
 * возвращает разметку выбора субъектов РФ, колличество выбранных субъектов
 */

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_ALL_SUBJECTS_MODAL } from "../../service/action";
import { ModalHead } from "../ModalHead/ModalHead";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styleAllSubjectsModal from "./ModalAllSubjects.module.css";
import { SubjectList } from "../SubjectsList/SubjectList";
import { subjectsSelect } from "../../utils/data";
const modal = document.getElementById("react-modal");

export const ModalAllSubjects = () => {
  const dispatch = useDispatch();
  const { subjectsModal, subjects } = useSelector((state) => state.subjects);
  const closeModal = () => {
    dispatch({ type: CLOSE_ALL_SUBJECTS_MODAL });
  };
  return ReactDOM.createPortal(
    <ModalOverlay isActive={subjectsModal} closeModal={closeModal}>
      <div className={styleAllSubjectsModal.modal}>
        <ModalHead closeModal={closeModal} text="Выбранные субъекты РФ" />
        <p className={styleAllSubjectsModal.p}>
          Выбрано {subjects.length} субъекта(ов)
        </p>
        <div className={styleAllSubjectsModal.list}>
          <SubjectList char="А" data={subjectsSelect} />
          <SubjectList char="Б" data={subjectsSelect} />
          <SubjectList char="В" data={subjectsSelect} />
          <SubjectList char="Е" data={subjectsSelect} />
          <SubjectList char="З" data={subjectsSelect} />
          <SubjectList char="И" data={subjectsSelect} />
          <SubjectList char="К" data={subjectsSelect} />
          <SubjectList char="Л" data={subjectsSelect} />
          <SubjectList char="М" data={subjectsSelect} />
          <SubjectList char="Н" data={subjectsSelect} />
          <SubjectList char="О" data={subjectsSelect} />
          <SubjectList char="П" data={subjectsSelect} />
          <SubjectList char="Р" data={subjectsSelect} />
          <SubjectList char="С" data={subjectsSelect} />
          <SubjectList char="Т" data={subjectsSelect} />
          <SubjectList char="У" data={subjectsSelect} />
          <SubjectList char="Х" data={subjectsSelect} />
          <SubjectList char="Ч" data={subjectsSelect} />
          <SubjectList char="Я" data={subjectsSelect} />
        </div>
      </div>
    </ModalOverlay>,
    modal
  );
};
