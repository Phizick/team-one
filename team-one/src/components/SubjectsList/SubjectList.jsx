/**
 * @component
 * Компонент список субъектов по началу буквы
 * Отпраляет dispatch на добавление в список subjects и удаление из него
 * @props
 * data - принимает массив, пример: {name: 'Москва', id: 'moscow'}
 * char - принимает string, первая буква списка
 * @returns
 * возвращает разметку субъектов
 */

import { useDispatch } from "react-redux";
import { CheckBox } from "../CheckBox/CheckBox";
import styleSubjectList from "./SubjectList.module.css";
import { ADD_SUBJECTS, DELETE_SUBJECTS } from "../../service/action";
export const SubjectList = ({ data, char }) => {
  const dispatch = useDispatch();
  const addSubject = (e) => {
    if (e.target.checked) {
      dispatch({
        type: ADD_SUBJECTS,
        payload: { id: e.target.id, name: e.target.value },
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
