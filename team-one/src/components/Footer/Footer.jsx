/**
 * @component
 * Компонент подвал страницы
 * @returns
 * возвращает разметку footer
 */

import styleFooter from "./Footer.module.css";

export const Footer = () => {
  return <footer className={styleFooter.footer}>©️Практиканты</footer>;
};
