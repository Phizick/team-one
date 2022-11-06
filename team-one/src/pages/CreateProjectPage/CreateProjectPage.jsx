/**
 * @component
 * Компонент-страница Создания проекта
 * dispatch на получение рекомендаций и отправку созданного проекта, на основе выбранных полей отрисовываются график и диаграмма
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
import { addProject } from "../../service/action/addProject";
import { STATS } from "../../utils/stats";

export const CreateProjectPage = () => {
  const { data } = useSelector((state) => state.addProjects);
  const myDate = new Date().toString();
  const idUser = window.localStorage.getItem("id");
  const [isEmpty, setIsEmpty] = useState(true);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { recommendations } = useSelector((state) => state.openRecommendations);
  const [nameInput, setNameInput] = useState("");
  const saveButton = (dateOn, dateFrom, about, subject) => {
    const dateOnYear = dateOn.slice(0, 4);
    const dateOnMonth = dateOn.slice(5, 7);
    const dateOnR = `${dateOnMonth} ${dateOnYear}`;
    if (isEmpty === true) {
      dispatch(
        addProject(idUser, nameInput, dateOnR, dateFrom, about, subject, myDate)
      );
      setNameInput(nameInput);
      dispatch({ type: OPEN_RECOMMENDATIONS });
      setIsEmpty(false);
    }
  };

  const barDateStats = STATS.filter(
    (i) =>
      i.subject === data?.subject &&
      i.tnved_name === data?.about &&
      i.period === data?.dateOn
  );

  return (
    <div>
      <Header isActiveButton={recommendations} />
      <div className={styleСreateProjectPage.flex}>
        <BackLink toLink="/" />
        {isEmpty ? (
          <Input
            changeInput={(e) => setNameInput(e.target.value)}
            classname={styleСreateProjectPage.input}
            type="sub"
            placeholder="Введите название проекта"
          />
        ) : (
          <h2 className={styleСreateProjectPage.name_project}>
            {nameInput.length !== 0 ? nameInput : "Без названия"}
          </h2>
        )}
      </div>
      <SearchFilters saveButton={saveButton} />
      {isEmpty === false ? (
        <>
          <div className={styleСreateProjectPage.grid}>
            <div className={styleСreateProjectPage.bar}>
              <BarDate
                dei_export={barDateStats[0]?.dei_export}
                dei_import={barDateStats[0]?.dei_import}
                tnved_name={barDateStats[0]?.tnved_name}
              />
            </div>
            <div className={styleСreateProjectPage.channel_bar}>
              <ChannelBar />
            </div>
            <SubjectsPie classname={styleСreateProjectPage.grid_end} />
          </div>
          <ExportData
            exportD={barDateStats[0]?.dei_export}
            importD={barDateStats[0]?.dei_import}
            monthD={barDateStats[0]?.period}
            unit={barDateStats[0]?.tnved_measure_unit}
          />
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
