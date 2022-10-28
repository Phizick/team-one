import stylesFormInput from "./FormInput.module.css";

export const FormInput = ({ children, text }) => {
  return (
    <span className={stylesFormInput.span}>
      <label className={stylesFormInput.label}>{text}</label>
      {children}
    </span>
  );
};
