/**
 * @component
 * Компонент Заголовка страницы
 * @props
 * children - принимает JSX разметку
 * title - принимает string, заголовок для элемента
 * @returns
 * возвращает разметку заголовка страницы
 */

import stylesProjectsName from "./ProjectsName.module.css";
export const ProjectsName = ({ children, title }) => {
  return (
    <div className={stylesProjectsName.div}>
      {children}
      <h2 className={stylesProjectsName.title}>{title}</h2>
    </div>
  );
};
