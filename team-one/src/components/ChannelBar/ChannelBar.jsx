import { useDispatch, useSelector } from "react-redux";
import { OPEN_ALL_SUBJECTS_MODAL } from "../../service/action";
import { Button } from "../Button/Button";
import styleChannelBar from "./ChannelBar.module.css";
export const ChannelBar = () => {
  const { subjects } = useSelector((state) => state.subjects);

  const dispatch = useDispatch();
  const openSubjectsModal = () => {
    dispatch({ type: OPEN_ALL_SUBJECTS_MODAL });
  };
  return (
    <div className={styleChannelBar.div}>
      <h2 className={styleChannelBar.title}>Выбранные субъекты</h2>
      {subjects.length === 0 ? (
        <p className={styleChannelBar.p}>
          Вы еще не выбрали ни одного субьекта для данного проекта.
        </p>
      ) : (
        ""
      )}
      <ul className={styleChannelBar.ul}>
        {subjects.map((item) => {
          return (
            <li key={item.id} className={styleChannelBar.li}>
              {item.name}
            </li>
          );
        })}
      </ul>
      <Button onClick={openSubjectsModal} type="primary">
        Показать все субъекты
      </Button>
    </div>
  );
};
