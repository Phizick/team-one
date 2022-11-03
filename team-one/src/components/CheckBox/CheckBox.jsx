import styleCheckBox from "./CheckBox.module.css";

export const CheckBox = ({idElement,text,...rest}) => {
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
