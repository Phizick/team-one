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
export const CreateProjectPage = () => {
  return (
    <div>
      <Header />
      <div className={styleCreateProjectPage.flex}>
        <BackLink toLink="/" />
        <Input
          classname={styleCreateProjectPage.input}
          type="sub"
          placeholder="Введите название проекта"
        />
      </div>
      <SearchFilters />
      <div className={styleCreateProjectPage.grid}>
        <div className={styleCreateProjectPage.bar}>
          <BarDate />
        </div>
        <div className={styleCreateProjectPage.channel_bar}>
          <ChannelBar />
        </div>
        <SubjectsPie classname={styleCreateProjectPage.grid_end} />
      </div>
      <EmptyProject />
      <Footer />
      <ModalUserInfo />
    </div>
  );
};
