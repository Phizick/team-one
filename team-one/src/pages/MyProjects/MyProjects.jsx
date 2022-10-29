import { BackLink } from "../../components/BackLink/BackLink";
import { CreateProjectButton } from "../../components/CreateProjectButton/CreateProjectButton";
import { Header } from "../../components/Header/Header";
import { ModalFiltrProjects } from "../../components/ModalFiltrProjects/ModalFiltrProjects";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import { ProjectsName } from "../../components/ProjectsName/ProjectsName";
export const MyProjects = () => {
  return (
    <div>
      <Header />
      <ProjectsName title="Страница проектов">
        <BackLink toLink="/" />
      </ProjectsName>
      <CreateProjectButton />
      <ModalUserInfo />
      <ModalFiltrProjects />
      <ProjectsList />
    </div>
  );
};
