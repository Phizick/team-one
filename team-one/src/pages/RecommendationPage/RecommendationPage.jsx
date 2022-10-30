import { BackLink } from "../../components/BackLink/BackLink";
import { Header } from "../../components/Header/Header";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { ProjectsName } from "../../components/ProjectsName/ProjectsName";
import styleRecommendationPage from "./RecommendationPage.module.css";
export const RecommendationPage = () => {
  return (
    <div>
      <Header />
      <ProjectsName title="Рекомендация: прогноз по замещению">
        <BackLink toLink="/" />
      </ProjectsName>
      <div className={styleRecommendationPage.blocks}>
        <div className={styleRecommendationPage.div}>
          <h2 className={styleRecommendationPage.title}>
            Требуется производство с нуля
          </h2>
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
            <ProgressBar city="Москва" money={3587500} percent={35} />
            <ProgressBar city="Красноярск" money={3075000} percent={30} />
            <ProgressBar city="Республтка Алтай" money={2050000} percent={20} />
            <ProgressBar city="Санкт-Петербург" money={1025000} percent={10} />
            <ProgressBar city="Ростовская Область" money={512500} percent={5} />
          </div>
        </div>
        <div className={styleRecommendationPage.div}>
          <h2 className={styleRecommendationPage.title}>
            Требуется производство с нуля
          </h2>
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
            <ProgressBar city="Москва" money={3587500} percent={35} />
            <ProgressBar city="Красноярск" money={3075000} percent={30} />
            <ProgressBar city="Республтка Алтай" money={2050000} percent={20} />
            <ProgressBar city="Санкт-Петербург" money={1025000} percent={10} />
            <ProgressBar city="Ростовская Область" money={512500} percent={5} />
          </div>
        </div>
      </div>
      <ModalUserInfo />
    </div>
  );
};
