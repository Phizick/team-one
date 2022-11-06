/**
 * @component
 * Компонент содержаший график Bar билиотеки ChartJs
 * Внутри компонента есть labels (Этикетки для графика), options(Настройки для графика и заголовок), dataBar(Данные для постройки графика)
 * @returns
 * возвращает разметку-обертку графика
 */

import { Bar } from "react-chartjs-2";
import styleBarDate from "./BarDate.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarDate = ({ dei_export, dei_import, tnved_name }) => {
  const labels = ["Янв 2022"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: tnved_name,
      },
    },
  };

  const dataBar = {
    labels,
    datasets: [
      {
        label: "Импорт",
        data: [dei_import],
        backgroundColor: "#c1c1c1",
      },
      {
        label: "Экспорт",
        data: [dei_export],
        backgroundColor: "#d1d1d1",
      },
    ],
  };
  return (
    <div className={styleBarDate.bar}>
      <h2 className={styleBarDate.title}>По дате:</h2>
      <Bar data={dataBar} options={options} />
    </div>
  );
};
