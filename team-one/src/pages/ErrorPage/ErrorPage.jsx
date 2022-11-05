/**
 * @component
 * Компонент-страница 404
 * @returns
 * возвращает разметку страницы и ссылку на роут /
 */

import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import stylesErrorPage from "./ErrorPage.module.css";
export const ErrorPage = () => {
  return (
    <div className={stylesErrorPage.div}>
      <h1 className={stylesErrorPage.title}>404</h1>
      <p className={stylesErrorPage.text}>
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
        существует. Возможно она устарела, была удалена, или был введен неверный
        адрес в адресной строке
      </p>
      <Link className={stylesErrorPage.link} to="/">
        <Button type="primary">Перейти на главную</Button>{" "}
      </Link>
    </div>
  );
};
