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
