import React, { useState, useEffect } from 'react';
import { getSeasonalAnime } from '../../services/collectionService';  // Adjust the import path
import Collection from './Collection';  // Adjust the import path
import { Anime } from '../../interfaces/Interfaces';  // Adjust the import path

interface CollectionMiddlewareProps {}

export const CollectionMiddleware: React.FC<CollectionMiddlewareProps> = () => {
  const [animeData, setAnimeData] = useState<Anime[]>([]);

  useEffect(() => {
    fetchSeasonalAnime();
  }, []);

  const fetchSeasonalAnime = async () => {
    try {
      const year = 2023;
      const season = 'fall'; 

      const seasonalAnimeData = await getSeasonalAnime(year, season);
      setAnimeData(seasonalAnimeData);
    } catch (error) {
      console.error('Error fetching seasonal anime:', error);
    }
  };

  return (
    <div className='CollectionList'>
      <Collection data={animeData} />
    </div>
  );
};

