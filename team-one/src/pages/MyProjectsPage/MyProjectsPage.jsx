/**
 * @component
 * Компонент-страница начальная
 * Содержит Header, Создание нового проекта, список проектов, футер
 * @returns
 * возвращает разметку страницы
 */

import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { CreateProjectButton } from "../../components/CreateProjectButton/CreateProjectButton";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ModalDeleteProject } from "../../components/ModalDeleteProject/ModalDeleteProject";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import { ProjectsName } from "../../components/ProjectsName/ProjectsName";
import plusImg from "../../images/plus.svg";
import styleMyProjects from "./MyProjectsPage.module.css";
export const MyProjectsPage = () => {
  return (
    <>
      <Header />
      <ProjectsName title="Страница проектов" />
      <CreateProjectButton />
      <ProjectsList />
      <ModalUserInfo />
      <ModalDeleteProject />
      <div className={styleMyProjects.div}>
        <div className={styleMyProjects.text}>
          <h2 className={styleMyProjects.title}>Не нашли нужного проекта?</h2>
          <p className={styleMyProjects.p}>
            Если вы не нашли нужного проекта, Вы можете создать новый, указав
            необходимые параметры.
          </p>
        </div>
        <Link to="/create-project" className={styleMyProjects.link}>
          Создать новый проект{" "}
          <Button img={plusImg} width={48} type="secondary"></Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};
