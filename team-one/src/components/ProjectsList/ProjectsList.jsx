/**
 * @component
 * Компонент Списка моих проектов
 * Отправляет при нажатии на ... dispatch на открытия модального окна -  удалить проект
 * @returns
 * возвращает разметку проектов
 */

import styleProjectList from "./ProjectsList.module.css";
import pointsImg from "../../images/points.svg";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_DELETE_PROJECT_MODAL } from "../../service/action";
import { Link } from "react-router-dom";
import { ModalDeleteProject } from "../ModalDeleteProject/ModalDeleteProject";
export const ProjectsList = () => {
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: OPEN_DELETE_PROJECT_MODAL });
  };
  return (
    <div className={styleProjectList.list}>
      <ul className={styleProjectList.ul_titles}>
        <li className={styleProjectList.li_title}>Название</li>
      </ul>
      <ul className={styleProjectList.ul_projects}>
        {projects.length !== 0 ? (
          projects.reverse().map((i) => {
            return (
              <li key={i._id} className={styleProjectList.li_project}>
                <Link
                  className={styleProjectList.link}
                  to={`my-project/${i._id}`}
                >
                  <div className={styleProjectList.li_project_name_box}>
                    <div className={styleProjectList.li_name}>
                      {i.name ? i.name.charAt(0).toUpperCase() : "Б"}
                    </div>
                    <p className={styleProjectList.li_name_text}>
                      {i.name.length === 0 ? "Без названия" : i.name}
                    </p>
                  </div>
                </Link>
                <div className={styleProjectList.li_data}>
                  <span className={styleProjectList.li_btn}>
                    <Button
                      onClick={() => openModal(i._id)}
                      type="outline"
                      img={pointsImg}
                      width={32}
                    ></Button>
                  </span>
                </div>
                <ModalDeleteProject id={i._id} />
              </li>
            );
          })
        ) : (
          <h2 className={styleProjectList.not_projects}>Пока нет проектов</h2>
        )}
      </ul>
    </div>
  );
};
