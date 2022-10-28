import stylesProjectsName from "./ProjectsName.module.css";
export const ProjectsName = ({ title}) => {
  return (
    <div className={stylesProjectsName.div}>
      <h2 className={stylesProjectsName.title}>{title}</h2>
    </div>
  );
};
