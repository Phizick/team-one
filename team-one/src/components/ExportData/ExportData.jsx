import styleExportData from "./ExportData.module.css";
import { CSVLink } from "react-csv";
import exportImg from "../../images/export.svg";
import { Button } from "../Button/Button";
export const ExportData = () => {
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
      <Button type="secondary" width={210} img={exportImg}>
        <CSVLink
          className={styleExportData.excel}
          data={data}
          headers={headers}
        >
          Экспорт в Excel
        </CSVLink>
      </Button>
      <Button type="primary" width={210} img={exportImg}>
        Экспорт в PDF
      </Button>
    </div>
  );
};
