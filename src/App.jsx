import { BACKDROP_BASE_URL } from "./api/config";
import { TvShowAPI } from "./api/tv-show";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import s from "./style.module.css";
import { useEffect, useState } from "react";
import { Logo } from "./components/Logo/Logo";
import LogoImg from "./assets/images/logo.png";
import { TVShowList } from './components/TVShowList/TVShowList';

export function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopulars = async () => {
    const populars = await TvShowAPI.fetchPopulars();
    if (populars.length > 0) setCurrentTvShow(populars[2]);
  };

  const fetchRecommendation = async (tvShowId) => {
    const recommendations = await TvShowAPI.fetchRecommendation(tvShowId);
    if (recommendations.length > 0) setRecommendationList(recommendations.slice(0, 10));
  };

  const updateCurrentTVShow = (tvShow) => {
    setCurrentTvShow(tvShow);
  }

  //since we dont want the to fetch the api several times upon props update
  //api fetch one time upone page load
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if(currentTvShow) fetchRecommendation(currentTvShow.id);
  }, [currentTvShow]);

  console.log(recommendationList);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}')`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={LogoImg}
              title="Wattowatch"
              subtitle="Find a show you may Like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="search" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TVShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {recommendationList && <TVShowList tvShowList={recommendationList} onItemClick={updateCurrentTVShow} />}
      </div>
    </div>
  );
}
