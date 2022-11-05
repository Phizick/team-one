/**
 * @component
 * Компонент Кнопка
 * @props
 * children - принмает string - имя кнопки
 * img - принимает string - ссылка на изображение
 * type - принимает string, типы кнопки: primary, secondary,transparent, outline
 * width - принимает number, типы ширины: по умолчанию width: 100%, width: 180 - 180px, width: 166 - 166px, width: 170 - 170px, width: 48 - 48px, width: 210 - 210px, width: 32 - 32px
 * direction_img: принимает stirng, left - изображение слева, поумолчанию изображение внутри Button - справа, при условии если указан props img
 * classname - принимает object, указывается класс для компонента
 * ...rest - принимает остальные пропсы
 * @returns
 * возвращает разметку кнопки
 */

import stylesButton from "./Button.module.css";
export const Button = ({
  children,
  img,
  type,
  width,
  direction_img,
  classname,
  ...rest
}) => {
  const classNames = require("classnames");
  const buttonBgColor =
    type === "primary"
      ? stylesButton.button_primary
      : type === "secondary"
      ? stylesButton.button_secondary
      : type === "transparent"
      ? stylesButton.button_transparent
      : type === "outline"
      ? stylesButton.button_outline
      : "";
  const buttonWidth =
    width === 180
      ? stylesButton.button_180
      : width === 166
      ? stylesButton.button_166
      : width === 170
      ? stylesButton.button_170
      : width === 48
      ? stylesButton.button_48
      : width === 210
      ? stylesButton.button_210
      : width === 32
      ? stylesButton.button_32
      : "";
  const directionImg = direction_img === "left" ? stylesButton.img_left : "";

  return (
    <button
      {...rest}
      className={classNames(
        stylesButton.button,
        buttonBgColor,
        buttonWidth,
        classname
      )}
    >
      <p className={stylesButton.text}>{children}</p>
      {img ? (
        <div className={classNames(stylesButton.img, directionImg)}>
          <img src={img} alt="icon" />
        </div>
      ) : (
        ""
      )}
    </button>
  );
};
