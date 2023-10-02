import honeybudicon from '../../assets/images/honeybud-icon.png'
import './Home.css'
import { Link } from "react-router-dom";
import { getAnimeList } from '../../services/getListService';

import AnimeList from './AnimeList';
const username = '@me';


export const Home = () => {
    console.log("callback")
    if (localStorage.getItem('access_token')) {

        getAnimeList(username, 'watching', 'list_score', 100, 0)
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }
    return (
        <div>
        <div className = "Header">
            <Link to={'/'}>
            <img src={honeybudicon} alt="Honeybud Icon" />
            </Link>
        </div>
        <div className = "PageContent">
        <div className = "SeasonalAnime">
            <div className="CollectionLabel">
                <h1>Anime of the season</h1>
            </div>
            <AnimeList />
            {/* <CollectionMiddleware /> */}
        </div>
        </div>
      </div>
    );
  }
  