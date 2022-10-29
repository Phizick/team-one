import { Input } from "../Input/Input";
import searchImg from "../../images/search.svg";
import filtrImg from "../../images/filtr.svg";
import styleProjectFiltr from "./ProjectsFiltr.module.css";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { OPEN_FILTR_PROJECTS } from "../../service/action";
export const ProjectsFiltr = () => {
  const dispatch = useDispatch();
  const openFiltrProjects = () => {
    dispatch({ type: OPEN_FILTR_PROJECTS });
  };
  return (
    <div className={styleProjectFiltr.div}>
      <span className={styleProjectFiltr.input}>
        <Input
          typeInput="text"
          img={searchImg}
          placeholder="Поиск по аналитике"
        />
      </span>
      <span className={styleProjectFiltr.span}>
        <Button
          className={styleProjectFiltr.button}
          type="outline"
          img={filtrImg}
          width={48}
          onClick={openFiltrProjects}
        ></Button>
      </span>
      <p className={styleProjectFiltr.text}>Всего 4 проекта</p>
      <select className={styleProjectFiltr.select}>
        <option value="date_open" className={styleProjectFiltr.option}>
          По дате открытия
        </option>
        <option value="date_create" className={styleProjectFiltr.option}>
          По дате создания
        </option>
        <option value="category" className={styleProjectFiltr.option}>
          По категориям
        </option>
        <option value="subject" className={styleProjectFiltr.option}>
          По субъектам
        </option>
        <option value="niche" className={styleProjectFiltr.option}>
          По нишам
        </option>
      </select>
    </div>
  );
};
