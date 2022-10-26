import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import logo from "../../images/arrow_right.svg";

export const RecomendationPage = () => {
  return (
    <div>
      <h1>RecomendationPage</h1>
      <Link to="/login">Логин</Link>
      <Button img={logo} type="primary">
        Войти
      </Button>
    </div>
  );
};
