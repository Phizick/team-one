/**
 * @component
 * Компонент-страница Создания проекта
 * dispatch на получение рекомендаций
 * Название проекта отправляется в localStorage
 * @returns
 * возвращает разметку страницы, модальные окна, диграммы, фильтры
 */

import { useRef, useState } from "react";
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
import styleСreateProjectPage from "./CreateProjectPage.module.css";
import { ExportData } from "../../components/ExportData/ExportData";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_RECOMMENDATIONS } from "../../service/action";
import { ModalAllSubjects } from "../../components/ModalAllSubjects/ModalAllSubjects";
import { ModalPdf } from "../../components/ModalPdf/ModalPdf";

export const CreateProjectPage = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { recommendations } = useSelector((state) => state.openRecommendations);
  const nameProject = window.localStorage.getItem("nameProject");
  const [nameInput, setNameInput] = useState("");
  const saveButton = () => {
    dispatch({ type: OPEN_RECOMMENDATIONS });
    if (!nameProject) {
      window.localStorage.setItem("nameProject", nameInput);
    }
    setIsEmpty(false);
  };
  return (
    <div>
      <Header isActiveButton={recommendations} />
      <div className={styleСreateProjectPage.flex}>
        <BackLink toLink="/" />
        {!nameProject ? (
          <Input
            changeInput={(e) => setNameInput(e.target.value)}
            classname={styleСreateProjectPage.input}
            type="sub"
            placeholder="Введите название проекта"
          />
        ) : (
          <>
            <h2 className={styleСreateProjectPage.name_project}>
              {nameProject}
            </h2>
          </>
        )}
      </div>
      <SearchFilters saveButton={saveButton} />
      {isEmpty === false ? (
        <>
          <div className={styleСreateProjectPage.grid}>
            <div className={styleСreateProjectPage.bar}>
              <BarDate />
            </div>
            <div className={styleСreateProjectPage.channel_bar}>
              <ChannelBar />
            </div>
            <SubjectsPie classname={styleСreateProjectPage.grid_end} />
          </div>
          <ExportData />
          <ModalPdf reference={ref} />
          <ModalAllSubjects />
        </>
      ) : (
        <EmptyProject />
      )}
      <Footer />
      <ModalUserInfo />
    </div>
  );
};
