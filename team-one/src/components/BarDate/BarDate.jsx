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

const labels = [
  "Янв. 2022",
  "Фев. 2022",
  "Мар. 2022",
  "Апр. 2022",
  "Май. 2022",
  "Июнь. 2022",
  "Июл. 2022",
  "Авг. 2022",
  "Сент. 2022",
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Молочная продукция",
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "Импорт",
      data: [
        10000000, 1300000, 14500000, 10000000, 1300000, 13000000, 20000000,
        10000000, 11000000,
      ],
      backgroundColor: "#c1c1c1",
    },
    {
      label: "Экспорт",
      data: [
        10000000, 1300000, 14500000, 1000000, 13000000, 130000, 20000000,
        19000000, 1000000,
      ],
      backgroundColor: "#d1d1d1",
    },
  ],
};

export const BarDate = () => {
  return (
    <div className={styleBarDate.bar}>
      <h2 className={styleBarDate.title}>По дате:</h2>
      <Bar data={data} options={options} />
    </div>
  );
};
