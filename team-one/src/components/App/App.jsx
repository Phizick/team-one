import { Route, Switch } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RecomendationPage } from "../../pages/RecomendationPage/RecomendationPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import stlyesApp from "./App.module.css";
export const App = () => {
  return (
    <div className={stlyesApp.app}>
      <Switch>
        <ProtectedRoute path="/" exact={true}>
          <RecomendationPage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;