import honeybudicon from '../../assets/images/honeybud-icon.png'
import './Home.css'
import {CollectionMiddleware} from '../../components/collections/CollectionMiddleware'
import { Link } from "react-router-dom";

export const Home = () => {
    console.log("callback")
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
            <CollectionMiddleware />
        </div>
        </div>
      </div>
    );
  }
  