import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { BoolText } from "../../components/BoolText/BoolText";
import { Header } from "../../components/Header/Header";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { ProjectsName } from "../../components/ProjectsName/ProjectsName";
import styleRecommendationPage from "./RecommendationPage.module.css";
export const RecommendationPage = () => {
  const { recommendations } = useSelector((state) => state.openRecommendations);
  if (recommendations === false) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Header />
      <ProjectsName title="Рекомендация: прогноз по замещению">
        <BackLink toLink="/" />
      </ProjectsName>
      <div className={styleRecommendationPage.blocks}>
        <div className={styleRecommendationPage.div}>
          <h2 className={styleRecommendationPage.title}>Итог:</h2>
          <div className={styleRecommendationPage.flex}>
            <div className={styleRecommendationPage.box_f}>
              <p className={styleRecommendationPage.sub}>Общий обьем затрат:</p>
              <p className={styleRecommendationPage.sup}>10 250 000 ₽</p>
            </div>
            <div className={styleRecommendationPage.box_f}>
              <p className={styleRecommendationPage.sub}>
                Предполагаемый срок погашения:
              </p>
              <p className={styleRecommendationPage.sup}>48 месяцев</p>
            </div>
          </div>
          <div className={styleRecommendationPage.bars}>
            <BoolText bool={true} text="Ниша свободна" />
            <BoolText bool={false} text="Есть инвестиционная программа" />
            <BoolText bool={true} text="Есть программа по импортозамещению" />
            <BoolText bool={false} text="Уровень возможности локализации" />
            <BoolText bool={false} text="Риски не велики" />
          </div>
        </div>
      </div>
      <ModalUserInfo />
    </div>
  );
};
