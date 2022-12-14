/**
 * @component
 * Компонент для экспорта данных в Excel
 * На основе библиотеки: React-csv
 * Отравляет dispatch на открытия модального окна, для дальнейшего экспорта в PDF
 * @props
 * importD - принимает number || null - колличество импортированных ШТУК
 * exportD - принимает number || null - колличество экспортированных ШТУК
 * monthD - принимает string, например "01 2022" - янверь 2022
 * unit - принимает string, например "ШТ"
 * @returns
 * возвращает разметку и обертку библиотеки React-csv
 */

import styleExportData from "./ExportData.module.css";
import { CSVLink } from "react-csv";
import exportImg from "../../images/export.svg";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { OPEN_PDF_MODAL } from "../../service/action";
export const ExportData = ({ importD, exportD, monthD, unit }) => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: OPEN_PDF_MODAL });
  };
  const headers = [
    { label: "Ипорт", key: "import" },
    { label: "Экспорт", key: "export" },
    { label: "Месяц", key: "month" },
  ];

  const data = [
    {
      import: `${importD} ${unit === 'ШТ' ? unit : 'ПАР'}`,
      export: `${exportD} ${unit === 'ШТ' ? unit : 'ПАР'}`,
      month: `${monthD}`,
    },
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

      <Button onClick={openModal} width={170} type="primary" img={exportImg}>
        Экспорт в PDF
      </Button>
    </div>
  );
};
