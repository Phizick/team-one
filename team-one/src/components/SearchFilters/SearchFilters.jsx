import { FormInput } from "../FormInput/FormInput";
import { Input } from "../Input/Input";
import styleSearchFilters from "./SearchFilters.module.css";
import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";
export const SearchFilters = ({ saveButton }) => {
  return (
    <div className={styleSearchFilters.flex}>
      <FormInput classname={styleSearchFilters.label} text="Дата c:">
        <Input
          classname={styleSearchFilters.date}
          type="secondary"
          typeInput="date"
        />
      </FormInput>
      <FormInput classname={styleSearchFilters.label} text="Дата по:">
        <Input
          classname={styleSearchFilters.date}
          type="secondary"
          typeInput="date"
        />
      </FormInput>
      <FormInput classname={styleSearchFilters.label} text="Категория:">
        <select className={styleSearchFilters.select}>
          <option>Молочные продукты</option>
          <option>Молочные продукты</option>
          <option>Молочные продукты</option>
          <option>Молочные продукты</option>
        </select>
      </FormInput>
      <FormInput classname={styleSearchFilters.label} text="Субъект:">
        <select className={styleSearchFilters.select}>
          <option>Алтайский край</option>
          <option>Алтайский край</option>
          <option>Алтайский край</option>
          <option>Алтайский край</option>
        </select>
      </FormInput>
      <div className={styleSearchFilters.checkbox}>
      <CheckBox/>
      </div>
      <Button
        onClick={saveButton}
        classname={styleSearchFilters.btn}
        type="primary"
      >
        Сохранить
      </Button>
    </div>
  );
};
