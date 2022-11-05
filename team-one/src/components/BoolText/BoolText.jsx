/**
 * @component
 * Компонент для отрисовки рекомендаций
 * @props
 * text -  принимает string - имя рекомендации
 * promptText - принимает string -  текст для подсказки
 * bool - принимает true || false, true - галочка done, false - крестик failure
 * @returns
 * возвращает разметку одного элемента рекомендации
 */

import { useState } from "react";
import imgDone from "../../images/done_green.svg";
import imgCLose from "../../images/close_red.svg";
import stylesBoolText from "./BoolText.module.css";
export const BoolText = ({ text, promptText, bool }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const classNames = require("classnames");
  const textMouseMove = (e) => {
    if (e.target) {
      setMouseEnter(true);
    }
  };
  const textMouseLeave = (e) => {
    if (e.target) {
      setMouseEnter(false);
    }
  };
  return (
    <>
      <div className={stylesBoolText.div}>
        <p className={stylesBoolText.p}>{text}</p>
        <div className={stylesBoolText.icons}>
          <p
            className={stylesBoolText.prompt}
            onMouseEnter={textMouseMove}
            onMouseLeave={textMouseLeave}
          >
            i
          </p>
          <img
            className={classNames(
              stylesBoolText.img,
              bool === true ? stylesBoolText.done : stylesBoolText.close
            )}
            src={bool === true ? imgDone : imgCLose}
            alt="icon"
          />
        </div>
      </div>
      {mouseEnter ? (
        <p className={stylesBoolText.text}>{`Подсказка: ${promptText}`}</p>
      ) : (
        ""
      )}
    </>
  );
};
