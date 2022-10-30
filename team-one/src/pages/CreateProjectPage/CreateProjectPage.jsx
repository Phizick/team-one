import { BackLink } from "../../components/BackLink/BackLink";
import { EmptyProject } from "../../components/EmptyProject/EmptyProject";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { ModalUserInfo } from "../../components/ModalUserInfo/ModalUserInfo";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
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
      <EmptyProject />
      <Footer />
      <ModalUserInfo />
    </div>
  );
};
