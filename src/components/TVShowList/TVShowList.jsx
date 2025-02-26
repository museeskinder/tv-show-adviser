import s from './style.module.css';
import { TVShowListItem } from '../TVShowListItem/TVShowListItem';

export const TVShowList = ({tvShowList, onItemClick}) => {
    return (
        <div>
            <div className={s.title}>You'll probably like: </div> 
            <div className={s.list}>
                { tvShowList.map((tvShow) => {
                    return (
                        <span className={s.tv_show_item} key={tvShow.id}>
                            <TVShowListItem 
                             tvShow={tvShow} 
                             onClick={onItemClick}
                            />
                        </span>
                    );
                }) 
                }
            </div>
        </div>
    );
}