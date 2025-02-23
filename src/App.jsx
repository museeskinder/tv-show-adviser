import { BACKDROP_BASE_URL } from "./api/config";
import { TvShowAPI } from "./api/tv-show";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import s from "./style.module.css";
import { useEffect, useState } from "react";

export function App() {
    const [currentTvShow, setCurrentTvShow] = useState();
    const fetchPopulars = async () => {
        const populars = await TvShowAPI.fetchPopulars();
        if(populars.length > 0) 
            setCurrentTvShow(populars[1]);
    };
 
    useEffect(() => {
        fetchPopulars();
    }, []);

    console.log(currentTvShow);

    return (
        <div 
        className={s.main_container}
        style={{
            background: currentTvShow ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}')` : "black"
        }}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <div>LOGO</div>
                        <div>Subtitle</div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <input style={{width: '100%'}} type="search" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTvShow && <TVShowDetail tvShow={currentTvShow}/>}
            </div>
            <div className={s.recommended_tv_shows}></div>
        </div>
    );
} 