import React, { useEffect } from 'react';
import { clientId } from '../../services/authService';
import {getAnimeList} from '../../services/getListService';

const AnimeList: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const token = clientId;
      try {
        const data = await getAnimeList(token, '@me', 'watching', 10);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); 

  return <div>Anime List</div>;
};

export default AnimeList;
