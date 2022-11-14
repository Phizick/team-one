/**
 * @component
 * Компонент Модального окна для экспортирования данных в PDF
 * Отправляет dispatch на закрытие модального окна
 * Экспортирование сделано на основе библиотеки React-To-PDF
 * !!В компонент вкладывать не больше 4х субъектов РФ и экспортировать в PDF, после нажатия кнопки "СОХРАНИТЬ"
 * Принимает захордокженную статистику
 * @props
 * reference - ссылка на DOM
 * @returns
 * возвращает разметку и графики: Bar -  с данными об импорте и экспорте, Pie - с выбранными субъектам
 */

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_PDF_MODAL } from "../../service/action";
import { BarDate } from "../BarDate/BarDate";
import { ModalHead } from "../ModalHead/ModalHead";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styleModalPdf from "./ModalPdf.module.css";
import Pdf from "react-to-pdf";
import { SubjectsPie } from "../SubjectsPie/SubjectsPie";
import { Button } from "../Button/Button";
import exportImg from "../../images/export.svg";
import { STATS } from "../../utils/stats";
import { useParams } from "react-router-dom";
const modal = document.getElementById("react-modal");
export const ModalPdf = ({ reference }) => {
  const { projects } = useSelector((state) => state.projects);
  const { id } = useParams();
  const { data } = useSelector((state) => state.addProjects);
  const { pdfModal } = useSelector((state) => state.pdfModal);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: CLOSE_PDF_MODAL });
  };

  const barDateStats = STATS.filter(
    (i) =>
      i.subject === data?.subject &&
      i.tnved_name === data?.about &&
      i.period === data?.dateOn
  );
  const findProject = projects.filter((i) => i._id === id);
  const barDateStatsTwo =
    findProject &&
    STATS.filter(
      (i) =>
        i.subject === findProject[0]?.subject &&
        i.tnved_name === findProject[0]?.about &&
        i.period === findProject[0]?.dateOn
    );
  return ReactDOM.createPortal(
    <ModalOverlay closeModal={closeModal} isActive={pdfModal}>
      <div className={styleModalPdf.modal}>
        <ModalHead text="" closeModal={closeModal} />
        <div className={styleModalPdf.pdf} ref={reference}>
          <BarDate
            dei_export={
              barDateStats.length !== 0
                ? barDateStats[0]?.dei_export
                : barDateStatsTwo[0]?.dei_export
            }
            dei_import={
              barDateStats.length !== 0
                ? barDateStats[0]?.dei_import
                : barDateStatsTwo[0]?.dei_import
            }
            tnved_name={
              barDateStats.length !== 0
                ? barDateStats[0]?.tnved_name
                : barDateStatsTwo[0]?.tnved_name
            }
          />
          <div className={styleModalPdf.data}>
            <SubjectsPie classname={styleModalPdf.data_pie} />
          </div>
        </div>
        <Pdf targetRef={reference} filename="data.pdf">
          {({ toPdf }) => (
            <Button img={exportImg} type="primary" onClick={toPdf}>
              Экспорт в PDF
            </Button>
          )}
        </Pdf>
      </div>
    </ModalOverlay>,
    modal
  );
};
