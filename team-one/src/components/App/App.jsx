import { Route, Switch } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { CreateProjectPage } from "../../pages/CreateProjectPage/CreateProjectPage";
import stlyesApp from "./App.module.css";
import { MyProjectsPage } from "../../pages/MyProjectsPage/MyProjectsPage";
import { RecommendationPage } from "../../pages/RecommendationPage/RecommendationPage";
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
