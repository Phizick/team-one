/**
 * @component
 * Компонент список субъектов по началу буквы
 * Отпраляет dispatch на добавление в список subjects и удаление из него
 * @props
 * data - принимает массив, пример: {name: 'Москва', id: 'moscow', bg: random, percent: random(1-100)}
 * char - принимает string, первая буква списка
 * @returns
 * возвращает разметку субъектов
 */

import { useDispatch } from "react-redux";
import { CheckBox } from "../CheckBox/CheckBox";
import styleSubjectList from "./SubjectList.module.css";
import { ADD_SUBJECTS, DELETE_SUBJECTS } from "../../service/action";
export const SubjectList = ({ data, char }) => {
  const getRandomPercent = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const bg = [
    "#FF0000",
    "#00FFFF",
    "#0000FF",
    "#ADD8E6",
    "#800080",
    "#FFFF00",
    "#00FF00",
    "#FF00FF",
    "#FFC0CB",
    "#FFA500",
    "#1589FF",
    "#ADDFFF",
    "#E6E6FA",
    "#66CDAA",
    "#43C6DB",
    "#50C878",
    "#808000",
    "#9CB071",
    "#77DD77",
    "#DAEE01",
    "#DBF9DB",
    "#F7E7CE",
  ];

  const bgColor = bg[getRandomPercent(0, 10)];

  const dispatch = useDispatch();
  const addSubject = (e) => {
    if (e.target.checked) {
      dispatch({
        type: ADD_SUBJECTS,
        payload: {
          id: e.target.id,
          name: e.target.value,
          percent: getRandomPercent(10, 100),
          bg: bgColor,
        },
      });
    } else {
      dispatch({ type: DELETE_SUBJECTS, indx: e.target.id });
    }
  };

  return (
    <>
      <h2 className={styleSubjectList.title}>{char}</h2>
      <ul className={styleSubjectList.ul}>
        {data.map((i) => {
          if (i.name.startsWith(`${char}`)) {
            return (
              <li className={styleSubjectList.li} key={i.id}>
                <CheckBox
                  onChange={addSubject}
                  value={i.name}
                  idElement={i.id}
                  text={i.name}
                />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};
