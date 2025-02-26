import s from "./style.module.css";
import { SMALL_IMAGE_COVER_BASE_URL } from "../../api/config";
const MAX_TITLE_LENGTH = 20;

export const TVShowListItem = ({ tvShow, onClick}) => {
  return (
    <div className={s.container} onClick={() => onClick(tvShow)}>
      <img
        alt={tvShow.name}
        src={SMALL_IMAGE_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>{tvShow.name.length > MAX_TITLE_LENGTH ? tvShow.name.slice(0, MAX_TITLE_LENGTH) + "..." : tvShow.name}</div>
    </div>
  );
};
