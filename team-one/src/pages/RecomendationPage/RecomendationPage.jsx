import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import logo from "../../images/arrow_right.svg";
import edit from "../../images/edit.svg";

export const RecomendationPage = () => {
  return (
    <div>
      <h1>RecomendationPage</h1>
      <Link to="/login">Логин</Link>
      <Button img={logo} type="outline">
        Войти
      </Button>
      <Input typeInput="password" img={true} placeholder="Введите пароль" />
      <Input typeInput="text" img={logo} placeholder="Введите логин" />
      <Input typeInput="text" placeholder="Введите что-нибудь" />
      <Input
        typeInput="text"
        img={edit}
        placeholder="Какой то текст"
        type="sub"
      />
    </div>
  );
};
