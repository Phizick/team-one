import { useState } from "react";
import styleInput from "./Input.module.css";
import hideValueImg from "../../images/disabled_password.svg";
import activeValueImg from "../../images/active_password.svg";
export const Input = ({ typeInput, img, placeholder, type }) => {
  const classNames = require("classnames");
  const classInput = type === "sub" ? styleInput.input_sub : "";
  const classSpan = type === "sub" ? styleInput.span_sub : "";
  const [value, setValue] = useState("");
  const [valueHide, setValueHide] = useState(true);
  return (
    <span className={classNames(styleInput.span, classSpan)}>
      <input
        className={classNames(styleInput.input, classInput)}
        type={
          typeInput !== "password"
            ? typeInput
            : typeInput === "password" && valueHide === false
            ? "text"
            : "password"
        }
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
      {img ? (
        <button
          className={styleInput.button}
          onClick={() =>
            typeInput === "password" ? setValueHide((prev) => !prev) : ""
          }
        >
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
