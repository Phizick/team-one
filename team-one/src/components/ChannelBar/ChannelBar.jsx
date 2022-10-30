import { ProgressBar } from "../ProgressBar/ProgressBar";
import styleChannelBar from "./ChannelBar.module.css";
export const ChannelBar = () => {
  return (
    <div className={styleChannelBar.div}>
      <h2 className={styleChannelBar.title}>Перелив капитала</h2>
      <div className={styleChannelBar.ul}>
      <ProgressBar percent={100} city="Ростовская область"/>
      <ProgressBar percent={67} city="Республтка Алтай"/>
      <ProgressBar percent={32} city="Красноярск"/>
      <ProgressBar percent={13} city="Ростовская область"/>
      <ProgressBar percent={5} city="Москва"/>
      </div>
    </div>
  );
};
