import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_ALL_SUBJECTS_MODAL } from "../../service/action";
import { FormInput } from "../FormInput/FormInput";
import { Input } from "../Input/Input";
import { ModalHead } from "../ModalHead/ModalHead";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styleAllSubjectsModal from "./AllSubjectsModal.module.css";
import searchImg from "../../images/search.svg";
import { useState } from "react";
import { SubjectList } from "../SubjectsList/SubjectList";
import { subjectsSelect } from "../../utils/data";
const modal = document.getElementById("react-modal");

export const AllSubjectsModal = () => {
  const [nameSubject, setNameSubject] = useState("");
  const dispatch = useDispatch();
  const { subjectsModal,subjects} = useSelector((state) => state.subjects);
  const closeModal = () => {
    dispatch({ type: CLOSE_ALL_SUBJECTS_MODAL });
  };
  const filterSubject = subjectsSelect.filter((subject) => {
    return subject.name.toLowerCase().includes(nameSubject.toLowerCase());
  });

  return ReactDOM.createPortal(
    <ModalOverlay isActive={subjectsModal} closeModal={closeModal}>
      <div className={styleAllSubjectsModal.modal}>
        <ModalHead closeModal={closeModal} text="Выбранные субъекты РФ" />
        <p className={styleAllSubjectsModal.p}>Выбрано {subjects.length} субъекта(ов)</p>
        {/* <FormInput text="Субъект РФ">
          <Input
            placeholder="Поиск по субъектам РФ"
            changeInput={(e) => setNameSubject(e.target.value)}
            value={nameSubject}
            img={searchImg}
          />
        </FormInput> */}
        <div className={styleAllSubjectsModal.list}>
          <SubjectList char="А" data={filterSubject} />
          <SubjectList char="Б" data={filterSubject} />
          <SubjectList char="В" data={filterSubject} />
          <SubjectList char="Е" data={filterSubject} />
          <SubjectList char="З" data={filterSubject} />
          <SubjectList char="И" data={filterSubject} />
          <SubjectList char="К" data={filterSubject} />
          <SubjectList char="Л" data={filterSubject} />
          <SubjectList char="М" data={filterSubject} />
          <SubjectList char="Н" data={filterSubject} />
          <SubjectList char="О" data={filterSubject} />
          <SubjectList char="П" data={filterSubject} />
          <SubjectList char="Р" data={filterSubject} />
          <SubjectList char="С" data={filterSubject} />
          <SubjectList char="Т" data={filterSubject} />
          <SubjectList char="У" data={filterSubject} />
          <SubjectList char="Х" data={filterSubject} />
          <SubjectList char="Ч" data={filterSubject} />
          <SubjectList char="Я" data={filterSubject} />
        </div>
      </div>
    </ModalOverlay>,
    modal
  );
};
