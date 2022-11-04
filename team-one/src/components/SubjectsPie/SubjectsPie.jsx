import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styleSubjectsPie from "./SubjectsPie.module.css";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);

export const SubjectsPie = ({ classname }) => {
  const { subjects } = useSelector((state) => state.subjects);

  const labels = subjects.map((subject) => subject.name);
  const data = {
    labels,
    datasets: [
      {
        data: [35, 30, 20, 10],
        backgroundColor: [
          "#8547D7",
          "#4780D7",
          "#A7D747",
          "#E99535",
          "#D75347",
        ],
      },
    ],
  };
  const classNames = require("classnames");
  return (
    <div className={classNames(styleSubjectsPie.div, classname)}>
      <h2 className={styleSubjectsPie.title}>По субъектам РФ:</h2>
      <div className={styleSubjectsPie.flex}>
        <ul className={styleSubjectsPie.ul}>
          {subjects.map((i, ind) => {
            return (
              <li key={i.id} className={styleSubjectsPie.li}>
                {i.name}
                <div
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[ind],
                  }}
                  className={styleSubjectsPie.percent}
                >
                  {data.datasets[0].data[ind]}
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styleSubjectsPie.container}>
          {subjects.length !== 0 ? (
            <Pie data={data} />
          ) : (
            <p className={styleSubjectsPie.p}>
              Вы еще не выбрали ни одного субьекта для данного проекта.
              <br />
              <span className={styleSubjectsPie.span}>
                Для эскопрта в PDF используйте не больше 4х субъектов!
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
