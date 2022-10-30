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
