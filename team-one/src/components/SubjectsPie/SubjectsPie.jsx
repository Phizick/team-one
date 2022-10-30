import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styleSubjectsPie from "./SubjectsPie.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const labels = [
  "Ростовская область",
  "Санкт-Петербург",
  "Республика Алтай",
  "Красноярск",
  "Москва",
];
const data = {
  labels,
  datasets: [
    {
      data: [35, 30, 20, 10, 5],
      backgroundColor: ["#8547D7", "#4780D7", "#A7D747", "#E99535", "#D75347"],
    },
  ],
};

export const SubjectsPie = ({ classname }) => {
  const classNames = require("classnames");
  return (
    <div className={classNames(styleSubjectsPie.div, classname)}>
      <h2 className={styleSubjectsPie.title}>По субъектам РФ:</h2>
      <div className={styleSubjectsPie.flex}>
        <ul className={styleSubjectsPie.ul}>
          <li className={styleSubjectsPie.li}>
            Ростовская область
            <div
              style={{ backgroundColor: "#6F27CE" }}
              className={styleSubjectsPie.percent}
            >
              35%
            </div>
          </li>
          <li className={styleSubjectsPie.li}>
            Санкт-Петербург
            <div
              style={{ backgroundColor: "#4780D7" }}
              className={styleSubjectsPie.percent}
            >
              30%
            </div>
          </li>
          <li className={styleSubjectsPie.li}>
            Республика Алтай
            <div
              style={{ backgroundColor: "#A7D747" }}
              className={styleSubjectsPie.percent}
            >
              20%
            </div>
          </li>
          <li className={styleSubjectsPie.li}>
            Красноярск
            <div
              style={{ backgroundColor: "#E99535" }}
              className={styleSubjectsPie.percent}
            >
              10%
            </div>
          </li>
          <li className={styleSubjectsPie.li}>
            Москва
            <div
              style={{ backgroundColor: "#D75347" }}
              className={styleSubjectsPie.percent}
            >
              5%
            </div>
          </li>
        </ul>
        <Pie data={data} />
      </div>
    </div>
  );
};
