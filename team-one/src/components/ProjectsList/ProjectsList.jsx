import { ProjectsFiltr } from "../ProjectsFiltr/ProjectsFiltr";
import styleProjectList from "./ProjectsList.module.css";
import pointsImg from "../../images/points.svg";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { OPEN_DELETE_PROJECT_MODAL } from "../../service/action";
export const ProjectsList = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({ type: OPEN_DELETE_PROJECT_MODAL });
  };
  return (
    <div className={styleProjectList.list}>
      <ProjectsFiltr />
      <ul className={styleProjectList.ul_titles}>
        <li className={styleProjectList.li_title}>Название</li>
        <li className={styleProjectList.li_title}>Дата создания</li>
      </ul>
      <ul className={styleProjectList.ul_projects}>
        <li className={styleProjectList.li_project}>
          <div className={styleProjectList.li_project_name_box}>
            <div className={styleProjectList.li_name}>М</div>
            <p className={styleProjectList.li_name_text}>
              Мясо и пищевые мясные полуфабрикаты
            </p>
          </div>
          <div className={styleProjectList.li_otrasl_box}>
            <p className={styleProjectList.li_otrasl_text}>Отрасль: </p>
            <p className={styleProjectList.li_otrasl}>Птица</p>
          </div>
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
          <div className={styleProjectList.li_project_name_box}>
            <div className={styleProjectList.li_name}>М</div>
            <p className={styleProjectList.li_name_text}>
              Мясо и пищевые мясные полуфабрикаты
            </p>
          </div>
          <div className={styleProjectList.li_otrasl_box}>
            <p className={styleProjectList.li_otrasl_text}>Отрасль: </p>
            <p className={styleProjectList.li_otrasl}>Птица</p>
          </div>
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
