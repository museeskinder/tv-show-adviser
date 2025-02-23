import s from './style.module.css';

export const TVShowDetail = ({tvShow}) => {
    return (
        <>
         <div>{tvShow.name}</div>    
         <div>{tvShow.vote_average}</div>    
         <div>{tvShow.overview}</div>    
        </>
    );
};