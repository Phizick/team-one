/**
 * @component
 * Компонент возвращаюший на роутинг, который можно указать с помощью пропса toLink
 * @props
 * toLink - строка, указывающая на какой роут перейти
 * @returns
 * возвращает компонент Link - библиотеки React-Router-Dom
 */

import { Link } from "react-router-dom";
import stylesBackLink from "./BackLink.module.css";
import arrowImg from "../../images/arrow_left.svg";
export const BackLink = ({ toLink }) => {
  return (
    <Link className={stylesBackLink.link} to={toLink}>
      <img src={arrowImg} alt="icon" />
    </Link>
  );
};
