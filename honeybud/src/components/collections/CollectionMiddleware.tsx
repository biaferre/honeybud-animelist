import React, { useState, useEffect } from 'react';
import { getSeasonalAnime } from '../../services/collectionService';  // Adjust the import path
import Collection from './Collection';  // Adjust the import path
import './YourComponent.css';  // Adjust the CSS file path
import { Anime } from '../../interfaces/Interfaces';  // Adjust the import path

interface CollectionMiddlewareProps {}

const CollectionMiddleware: React.FC<CollectionMiddlewareProps> = () => {
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
    <div>
      <h1>Seasonal Anime Collection</h1>
      <Collection data={animeData} />
    </div>
  );
};

export default CollectionMiddleware;
