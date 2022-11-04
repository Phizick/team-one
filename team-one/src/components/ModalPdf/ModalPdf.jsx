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
const modal = document.getElementById("react-modal");
export const ModalPdf = ({ reference }) => {
  const { pdfModal } = useSelector((state) => state.pdfModal);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: CLOSE_PDF_MODAL });
  };

  return ReactDOM.createPortal(
    <ModalOverlay closeModal={closeModal} isActive={pdfModal}>
      <div className={styleModalPdf.modal}>
        <ModalHead text="" closeModal={closeModal} />
        <div className={styleModalPdf.pdf} ref={reference}>
          <BarDate />
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
