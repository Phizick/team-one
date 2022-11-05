/**
 * @component
 * Компонент кастомного чекбокса
 * @props
 * idElement - принимает string - присваивает id HTML элементу
 * text - принимает string - отображает текст обертке label
 * ...rest - примает другие пропсы
 * @returns
 * возвращает разметку кастомного чекбокса
 */
import styleCheckBox from "./CheckBox.module.css";

export const CheckBox = ({ idElement, text, ...rest }) => {
  return (
    <div className={styleCheckBox.checkbox}>
      <input
        id={idElement}
        className={styleCheckBox.checkbox_custom}
        name={idElement}
        type="checkbox"
        {...rest}
      />
      <label htmlFor={idElement} className={styleCheckBox.checkbox_label}>
        {text}
      </label>
    </div>
  );
};
