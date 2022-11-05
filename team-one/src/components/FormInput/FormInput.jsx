/**
 * @component
 * Компонент обертка для компонента Input
 * @props
 * children - принимает JSX разметку
 * text - принимает string - заголовок для label
 * classname - принимает object, указывается класс для компонента
 * @returns
 * возвращает разметку-обертку
 */

import stylesFormInput from "./FormInput.module.css";

export const FormInput = ({ children, text, classname }) => {
  const classNames = require("classnames");
  return (
    <span className={classNames(stylesFormInput.span, classname)}>
      <label className={stylesFormInput.label}>{text}</label>
      {children}
    </span>
  );
};
