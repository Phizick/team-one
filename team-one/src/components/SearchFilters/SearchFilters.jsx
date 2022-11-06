/**
 * @component
 * Компонент Фильтры по поиску Анализа ниш
 * @props
 * saveButton - принимает функцию для атрибута onClick
 * @returns
 * возвращает разметку компонентов FormInput,Input, Button и select
 */

import { FormInput } from "../FormInput/FormInput";
import { Input } from "../Input/Input";
import styleSearchFilters from "./SearchFilters.module.css";
import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";
import { useState } from "react";
export const SearchFilters = ({
  saveButton,
  vDateOn,
  vDateFrom,
  vAbout,
  vSubject,
}) => {
  const [valueDateOn, setValueDateOn] = useState("");
  const [valueDateFrom, setValueDateFrom] = useState("");
  const [valueAbout, setValueAbout] = useState(
    "ЛОШАДИ ЖИВЫЕ: ЧИСТОПОРОДНЫЕ ПЛЕМЕННЫЕ ЖИВОТНЫЕ"
  );
  const [valueSubject, setValueSubject] = useState(
    "45000 - ГОРОД МОСКВА СТОЛИЦА РОССИЙСКОЙ ФЕДЕРАЦИИ ГОРОД ФЕДЕРАЛЬНОГО ЗНАЧЕНИЯ"
  );
  return (
    <div className={styleSearchFilters.flex}>
      <FormInput classname={styleSearchFilters.label} text="Дата c:">
        <Input
          classname={styleSearchFilters.date}
          type="secondary"
          typeInput="date"
          value={!vDateOn ? valueDateOn : vDateOn}
          changeInput={(e) => setValueDateOn(e.target.value)}
        />
      </FormInput>
      <FormInput classname={styleSearchFilters.label} text="Дата по:">
        <Input
          classname={styleSearchFilters.date}
          type="secondary"
          typeInput="date"
          value={!vDateFrom ? valueDateFrom : vDateFrom}
          changeInput={(e) => setValueDateFrom(e.target.value)}
        />
      </FormInput>
      <FormInput classname={styleSearchFilters.label} text="Категория:">
        <select
          className={styleSearchFilters.select}
          value={!vAbout ? valueAbout : vAbout}
          onChange={(e) => setValueAbout(e.target.value)}
        >
          <option value="ЛОШАДИ ЖИВЫЕ: ЧИСТОПОРОДНЫЕ ПЛЕМЕННЫЕ ЖИВОТНЫЕ">
            Лошади живые
          </option>
          <option value="УСТРОЙСТВА ВЫЧИСЛИТЕЛЬНЫХ МАШИНЖ КОММУТАТОРЫ ДЛЯ ТЕЛЕФОННОЙ ИЛИ ТЕЛЕГРАФНОЙ СВЯЗИ ПРОЧИЕ">
            Устройства выч. машинж
          </option>
          <option value="МАШИНЫ ДЛЯ ПРИЕМА, ПРЕОБРАЗОВАНИЯ И ПЕРЕДАЧИ ИЛИ ВОССТАНОВЛЕНИЯ ГОЛОСА,  ИЗОБРАЖЕНИЙ ИЛИ ДРУГИХ ДАННЫХ, ВКЛЮЧАЯ КОММУТАЦИОННЫЕ УСТРОЙСТВА         И МАРШРУТИЗАТОРЫ">
            Коммутаторы и маршутизаторы
          </option>
        </select>
      </FormInput>
      <FormInput classname={styleSearchFilters.label} text="Субъект:">
        <select
          className={styleSearchFilters.select}
          value={!vSubject ? valueSubject : vSubject}
          onChange={(e) => setValueSubject(e.target.value)}
        >
          <option value="46000 - МОСКОВСКАЯ ОБЛАСТЬ">Московская область</option>
          <option value="45000 - ГОРОД МОСКВА СТОЛИЦА РОССИЙСКОЙ ФЕДЕРАЦИИ ГОРОД ФЕДЕРАЛЬНОГО ЗНАЧЕНИЯ">
            Москва
          </option>
          <option value="40000 - ГОРОД САНКТ-ПЕТЕРБУРГ ГОРОД ФЕДЕРАЛЬНОГО ЗНАЧЕНИЯ">
            Санкт Петербург
          </option>
          <option value="29000 - КАЛУЖСКАЯ ОБЛАСТЬ">Калужская область</option>
        </select>
      </FormInput>
      <div className={styleSearchFilters.checkbox}>
        <CheckBox
          idElement="internalProduction"
          text="Учитывать внутреннее производство"
        />
      </div>
      <Button
        onClick={() => {
          saveButton(valueDateOn, valueDateFrom, valueAbout, valueSubject);
        }}
        classname={styleSearchFilters.btn}
        type="primary"
      >
        Сохранить
      </Button>
    </div>
  );
};
