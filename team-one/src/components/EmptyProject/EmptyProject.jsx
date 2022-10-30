import styleEmptyProject from "./EmptyProject.module.css";

export const EmptyProject = () => {
  return (
    <div className={styleEmptyProject.div}>
      <h2 className={styleEmptyProject.title}>Проект пуст</h2>
      <p className={styleEmptyProject.text}>
        Для отображения аналитике необходимо выбрать параметры сортировки выше.
      </p>
    </div>
  );
};
