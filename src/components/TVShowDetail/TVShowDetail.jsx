import s from './style.module.css';

export const TVShowDetail = ({tvShow}) => {
    return (
        <>
         <div className={s.title}>{tvShow.name}</div>    
         <div className={s.rating}>{tvShow.vote_average}</div>    
         <div className={s.overview}>{tvShow.overview}</div>    
        </>
    );
};