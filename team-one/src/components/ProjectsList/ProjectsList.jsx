/**
 * @component
 * Компонент Списка моих проектов
 * Отправляет при нажатии на ... dispatch на открытия модального окна -  удалить проект
 *
 * @returns
 * возвращает разметку проектов
 */

import styleProjectList from "./ProjectsList.module.css";
import pointsImg from "../../images/points.svg";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { OPEN_DELETE_PROJECT_MODAL } from "../../service/action";
import { Link } from "react-router-dom";
export const ProjectsList = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: OPEN_DELETE_PROJECT_MODAL });
  };
  return (
    <div className={styleProjectList.list}>
      <ul className={styleProjectList.ul_titles}>
        <li className={styleProjectList.li_title}>Название</li>
        <li className={styleProjectList.li_title}>Дата создания</li>
      </ul>
      <ul className={styleProjectList.ul_projects}>
        <li className={styleProjectList.li_project}>
          <Link className={styleProjectList.link} to="/my-project">
            <div className={styleProjectList.li_project_name_box}>
              <div className={styleProjectList.li_name}>М</div>
              <p className={styleProjectList.li_name_text}>
                Мясо и пищевые мясные полуфабрикаты
              </p>
            </div>
          </Link>
          <div className={styleProjectList.li_data}>
            <p className={styleProjectList.li_data_text}>Создано: </p>
            <p className={styleProjectList.li_date}>10.10.2022</p>
            <span className={styleProjectList.li_btn}>
              <Button
                onClick={openModal}
                type="outline"
                img={pointsImg}
                width={32}
              ></Button>
            </span>
          </div>
        </li>
        <li className={styleProjectList.li_project}>
          <Link className={styleProjectList.link} to="/my-project">
            <div className={styleProjectList.li_project_name_box}>
              <div className={styleProjectList.li_name}>М</div>
              <p className={styleProjectList.li_name_text}>
                Мясо и пищевые мясные полуфабрикаты
              </p>
            </div>
          </Link>
          <div className={styleProjectList.li_data}>
            <p className={styleProjectList.li_data_text}>Создано: </p>
            <p className={styleProjectList.li_date}>10.10.2022</p>
            <span className={styleProjectList.li_btn}>
              <Button
                onClick={openModal}
                type="outline"
                img={pointsImg}
                width={32}
              ></Button>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
