import styleProgressBar from "./ProgressBar.module.css";

export const ProgressBar = ({ city, percent, money, backgroundGreen }) => {
  const classNames = require("classnames");
  return (
    <div
      className={classNames(
        styleProgressBar.li,
        backgroundGreen ? styleProgressBar.li_green : ""
      )}
    >
      {city}
      <div
        className={classNames(
          styleProgressBar.bar,
          backgroundGreen ? styleProgressBar.bar_green : ""
        )}
      >
        {money ? `${money}₽ ${percent}%` : `${percent}%`}
      </div>
      <span
        style={{ width: `${percent}%` }}
        className={classNames(
          styleProgressBar.progress,
          backgroundGreen ? styleProgressBar.progress_green : ""
        )}
      ></span>
    </div>
  );
};
