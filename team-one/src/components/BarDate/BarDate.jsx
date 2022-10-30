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

const data = {
  labels,
  datasets: [
    {
      label: "Молочные продукты",
      data: [
        10000000, 13000000, 14500000, 10000000, 13000000, 13000000, 20000000,
        10000000, 11000000,
      ],
      backgroundColor: "#D3BFED",
    },
  ],
};

export const BarDate = () => {
  return (
    <div className={styleBarDate.bar}>
      <h2 className={styleBarDate.title}>По дате:</h2>
      <Bar data={data} />
    </div>
  );
};
