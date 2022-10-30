import { useState } from "react";
import styleInput from "./Input.module.css";
import hideValueImg from "../../images/disabled_password.svg";
import activeValueImg from "../../images/active_password.svg";
export const Input = ({
  typeInput,
  img,
  placeholder,
  type,
  changeInput,
  value,
  classname,
  ...rest
}) => {
  const classNames = require("classnames");
  const classInput = type === "sub" ? styleInput.input_sub : "";
  const classSpan = type === "sub" ? styleInput.span_sub : "";
  const [valueHide, setValueHide] = useState(true);
  const handleVisiblePassword = (e) => {
    e.preventDefault();
    if (typeInput === "password") {
      setValueHide((prev) => !prev);
    }
  };
  return (
    <span className={classNames(styleInput.span, classSpan, classname)}>
      <input
        {...rest}
        className={classNames(styleInput.input, classInput,classname)}
        type={
          typeInput !== "password"
            ? typeInput
            : typeInput === "password" && valueHide === false
            ? "text"
            : "password"
        }
        onChange={changeInput}
        value={value}
        placeholder={placeholder}
      />
      {img ? (
        <button className={styleInput.button} onClick={handleVisiblePassword}>
          <img
            className={styleInput.img}
            src={
              typeInput === "password" && valueHide === true
                ? activeValueImg
                : valueHide === false
                ? hideValueImg
                : img
            }
            alt="icon"
          />
        </button>
      ) : (
        ""
      )}
    </span>
  );
};
