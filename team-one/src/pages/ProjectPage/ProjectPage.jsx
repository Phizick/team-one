/**
 * @component
 * Компонент-страница Мой проект
 * dispatch на получение рекомендаций
 * Название проекта отправляется в localStorage
 * @returns
 * возвращает разметку страницы, модальные окна, диграммы, фильтры
 */

import { useEffect, useRef } from "react";
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
import { useParams } from "react-router-dom";
import { getProjects } from "../../service/action/getProjects";
import { STATS } from "../../utils/stats";

export const ProjectPage = () => {
  const { id } = useParams();
  const myId = window.localStorage.getItem("id");
  console.log(id);
  const { projects } = useSelector((state) => state.projects);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { recommendations } = useSelector((state) => state.openRecommendations);
  const saveButton = () => {
    dispatch({ type: OPEN_RECOMMENDATIONS });
  };
  useEffect(() => {
    dispatch(getProjects(myId));
  }, [dispatch, myId]);

  const findProject = projects && projects.filter((i) => i._id === id);
  const dateStats = STATS.filter(
    (i) =>
      i.subject === findProject[0]?.subject &&
      i.tnved_name === findProject[0]?.about &&
      i.okpd === findProject[0]?.dateOn
  );

  return (
    <div>
      <Header isActiveButton={recommendations} />
      <div className={styleProjectPage.flex}>
        <BackLink toLink="/" />
        <h2 className={styleProjectPage.name_project}>
          {findProject[0]?.name}
        </h2>
      </div>
      <SearchFilters
        vDateOn={findProject[0]?.dateOn}
        vDateFrom={findProject[0]?.dateFrom}
        vSubject={findProject[0]?.subject}
        vAbout={findProject[0]?.about}
        saveButton={saveButton}
      />
      <div className={styleProjectPage.grid}>
        <div className={styleProjectPage.bar}>
          <BarDate
            tnved_name={dateStats[0]?.tnved_name}
            dei_export={dateStats[0]?.dei_export}
            dei_import={dateStats[0]?.dei_import}
          />
        </div>
        <div className={styleProjectPage.channel_bar}>
          <ChannelBar />
        </div>
        <SubjectsPie classname={styleProjectPage.grid_end} />
      </div>
      <ExportData
        exportD={dateStats[0]?.dei_export}
        importD={dateStats[0]?.dei_import}
        unit={dateStats[0]?.tnved_measure_unit}
        monthD={dateStats[0]?.period}
      />
      <Footer />
      <ModalPdf reference={ref} />
      <ModalAllSubjects />
      <ModalUserInfo />
    </div>
  );
};
