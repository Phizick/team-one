import styleCheckBox from "./CheckBox.module.css";

export const CheckBox = ({}) => {
  return (
    <div className={styleCheckBox.checkbox}>
      <input
        id="highload0"
        className={styleCheckBox.checkbox_custom}
        name="highload0"
        type="checkbox"
      />
      <label htmlFor="highload0" className={styleCheckBox.checkbox_label}>
        Учитывать внутреннее производство
      </label>
    </div>
  );
};
