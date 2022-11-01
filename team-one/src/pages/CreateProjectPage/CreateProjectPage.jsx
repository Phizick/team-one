import { useState } from "react";
import { BackLink } from "../../components/BackLink/BackLink";
import { BarDate } from "../../components/BarDate/BarDate";
import { ChannelBar } from "../../components/ChannelBar/ChannelBar";
import { EmptyProject } from "../../components/EmptyProject/EmptyProject";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { SubjectsPie } from "../../components/SubjectsPie/SubjectsPie";
import styleCreateProjectPage from "./CreateProjectPage.module.css";
import { ExportData } from "../../components/ExportData/ExportData";

export const CreateProjectPage = () => {
  const nameProject = window.localStorage.getItem("nameProject");
  const [nameInput, setNameInput] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(false);
  const saveButton = () => {
    if (isActiveButton === false) {
      setIsActiveButton(true);
      window.localStorage.setItem("buttonSave", true);
    }
    if (!nameProject) {
      window.localStorage.setItem("nameProject", nameInput);
    }
  };
  return (
    <div>
      <Header isActiveButton={isActiveButton} />
      <div className={styleCreateProjectPage.flex}>
        <BackLink toLink="/" />
        {!nameProject ? (
          <Input
            changeInput={(e) => setNameInput(e.target.value)}
            classname={styleCreateProjectPage.input}
            type="sub"
            placeholder="Введите название проекта"
          />
        ) : (
          <>
            <h2 className={styleCreateProjectPage.name_project}>
              {nameProject}
            </h2>
          </>
        )}
      </div>
      <SearchFilters saveButton={saveButton} />
      <div className={styleCreateProjectPage.grid}>
        <div className={styleCreateProjectPage.bar}>
          <BarDate />
        </div>
        <div className={styleCreateProjectPage.channel_bar}>
          <ChannelBar />
        </div>
        <SubjectsPie classname={styleCreateProjectPage.grid_end} />
      </div>
      <ExportData />
      <EmptyProject />
      <Footer />
      <ModalUserInfo />
    </div>
  );
};
