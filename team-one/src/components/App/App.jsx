/**
 * @component
 * Главный компонент приложения
 * @returns
 * возвращает страницы проекта по роутингу
 */

import { Route, Switch } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { CreateProjectPage } from "../../pages/CreateProjectPage/CreateProjectPage";
import stlyesApp from "./App.module.css";
import { MyProjectsPage } from "../../pages/MyProjectsPage/MyProjectsPage";
import { RecommendationPage } from "../../pages/RecommendationPage/RecommendationPage";
import { ProjectPage } from "../../pages/ProjectPage/ProjectPage";
export const App = () => {
  return (
    <div className={stlyesApp.app}>
      <Switch>
        <ProtectedRoute path="/" exact={true}>
          <MyProjectsPage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <ProtectedRoute path="/my-project" exact={true}>
          <ProjectPage/>
        </ProtectedRoute>
        <ProtectedRoute path="/create-project" exact={true}>
          <CreateProjectPage />
        </ProtectedRoute>
        <ProtectedRoute path="/recommendations" exact={true}>
          <RecommendationPage />
        </ProtectedRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
