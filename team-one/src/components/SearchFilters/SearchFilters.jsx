import { FormInput } from "../FormInput/FormInput";
import { Input } from "../Input/Input";
import calendarImg from "../../images/calendar.svg";
import styleSearchFilters from "./SearchFilters.module.css";
import { Button } from "../Button/Button";
export const SearchFilters = () => {
  return (
    <div className={styleSearchFilters.flex}>
      <FormInput classname={styleSearchFilters.label} text="Дата:">
        <Input
          classname={styleSearchFilters.date}
          type="secondary"
          typeInput="date"
          img={calendarImg}
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
      <FormInput classname={styleSearchFilters.label} text="Ниша:">
        <select className={styleSearchFilters.select}>
          <option>Продукты питания</option>
          <option>Продукты питания</option>
          <option>Продукты питания</option>
          <option>Продукты питания</option>
        </select>
      </FormInput>
      <Button classname={styleSearchFilters.btn} type="primary">
        Применить
      </Button>
    </div>
  );
};
