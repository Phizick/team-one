/**
 * @component
 * Компонент-страница авторизации
 * При нажатии на кнопку"Войти", в localStorage записывается введный логин, пароль и в случает, если нужно сохранить проекты записывает захардокженый id
 * @returns
 * возвращает разметку страницы, в случае успешного входа отпрявляется роут на /
 */

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import stylesLoginPage from "./LoginPage.module.css";
import { FormInput } from "../../components/FormInput/FormInput";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const LoginPage = () => {
  const loginUser = window.localStorage.getItem("login");
  const passwordUser = window.localStorage.getItem("password");
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = uuidv4();
  const loginUserFunc = (e) => {
    e.preventDefault();
    window.localStorage.setItem("login", email);
    window.localStorage.setItem("password", password);
    email !== "test" && password !== "test"
      ? window.localStorage.setItem("id", id)
      : window.localStorage.setItem("id", 3);
    history.replace({ pathname: "/" });
  };
  if (loginUser && passwordUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className={stylesLoginPage.flex}>
      <div className={stylesLoginPage.div}>
        <h2 className={stylesLoginPage.title}>Вход</h2>
        <form className={stylesLoginPage.form} onSubmit={loginUserFunc}>
          <FormInput text="E-mail:">
            <Input
              typeInput="text"
              value={email}
              changeInput={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш e-mail"
              required={true}
            />
          </FormInput>
          <FormInput text="Пароль:">
            <Input
              typeInput="password"
              value={password}
              changeInput={(e) => setPassword(e.target.value)}
              img={true}
              placeholder="Введите пароль"
              required={true}
            />
          </FormInput>
          <span className={stylesLoginPage.span}>
            <Button type="primary">Войти</Button>
          </span>
        </form>
      </div>
    </div>
  );
};
