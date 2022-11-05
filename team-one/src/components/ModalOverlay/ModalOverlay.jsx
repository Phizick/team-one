/**
 * @component
 * Компонент Оверлей Модального окна
 * @props
 * closeModal - принимает функцию закрытия модального окна при нажатии на оверлей и кнопки ESC
 * isActive - принимает true || false - при true - компонент и то, что внутри отображается, при false - компонент в состоянии visibility: hidden
 * children - принмает блок div
 * @returns
 * возвращает разметку текста и кнопки закрыть
 */

import stylesModalOverlay from "./ModalOverlay.module.css";
export const ModalOverlay = ({ children, isActive, closeModal }) => {
  const classNames = require("classnames");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  return (
    <div
      className={
        isActive === true
          ? classNames(
              stylesModalOverlay.modal_overlay,
              stylesModalOverlay.modal_overlay_active
            )
          : stylesModalOverlay.modal_overlay
      }
    >
      {children}
      <div
        className={isActive === true ? stylesModalOverlay.modal_overlay_z : ""}
        onClick={closeModal}
      ></div>
    </div>
  );
};
