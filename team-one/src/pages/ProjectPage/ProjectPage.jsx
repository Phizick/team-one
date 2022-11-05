/**
 * @component
 * Компонент-страница Мой проект
 * dispatch на получение рекомендаций
 * Название проекта отправляется в localStorage
 * @returns
 * возвращает разметку страницы, модальные окна, диграммы, фильтры
 */

import { useRef } from "react";
import { BackLink } from "../../components/BackLink/BackLink";
import { BarDate } from "../../components/BarDate/BarDate";
import { ChannelBar } from "../../components/ChannelBar/ChannelBar";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { SubjectsPie } from "../../components/SubjectsPie/SubjectsPie";
import styleProjectPage from "./ProjectPage.module.css";
import { ExportData } from "../../components/ExportData/ExportData";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_RECOMMENDATIONS } from "../../service/action";
import { ModalAllSubjects } from "../../components/ModalAllSubjects/ModalAllSubjects";
import { ModalPdf } from "../../components/ModalPdf/ModalPdf";

export const ProjectPage = () => {
  const nameProject = window.localStorage.getItem("nameProject");
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { recommendations } = useSelector((state) => state.openRecommendations);
  const saveButton = () => {
    dispatch({ type: OPEN_RECOMMENDATIONS });
  };
  return (
    <div>
      <Header isActiveButton={recommendations} />
      <div className={styleProjectPage.flex}>
        <BackLink toLink="/" />
        <h2 className={styleProjectPage.name_project}>{nameProject}</h2>
      </div>
      <SearchFilters saveButton={saveButton} />
      <div className={styleProjectPage.grid}>
        <div className={styleProjectPage.bar}>
          <BarDate />
        </div>
        <div className={styleProjectPage.channel_bar}>
          <ChannelBar />
        </div>
        <SubjectsPie classname={styleProjectPage.grid_end} />
      </div>
      <ExportData />
      <Footer />
      <ModalPdf reference={ref} />
      <ModalAllSubjects />
      <ModalUserInfo />
    </div>
  );
};
