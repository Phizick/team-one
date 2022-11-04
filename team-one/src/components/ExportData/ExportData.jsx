import styleExportData from "./ExportData.module.css";
import { CSVLink } from "react-csv";
import exportImg from "../../images/export.svg";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { OPEN_PDF_MODAL } from "../../service/action";
export const ExportData = () => {
  const dispatch = useDispatch()
  const openModal = () => {
    dispatch({type: OPEN_PDF_MODAL})
  }
  const headers = [
    { label: "Ипорт", key: "import" },
    { label: "Экспорт", key: "export" },
    { label: "Месяц", key: "month" },
  ];

  const data = [
    { import: "10.500.500", export: "10.500.500", month: "Янв. 2022" },
    { import: "10.500.500", export: "10.500.500", month: "Фев. 2022" },
    { import: "10.500.500", export: "10.500.500", month: "Мар. 2022" },
  ];
  return (
    <div className={styleExportData.div}>
      <Button width={170} type="secondary" img={exportImg}>
        <CSVLink
          className={styleExportData.excel}
          data={data}
          headers={headers}
        >
          Экспорт в Excel
        </CSVLink>
      </Button>

      <Button onClick={openModal}  width={170} type="primary" img={exportImg}>
        Экспорт в PDF
      </Button>
    </div>
  );
};
