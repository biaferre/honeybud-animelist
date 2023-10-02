import { Anime } from '../interfaces/Interfaces';
import axios from 'axios'; 

export const getSeasonalAnime = async (year: number, season: string): Promise<Anime[]> => {
  const url = `https://api.myanimelist.net/v2/anime/season/${year}/${season}`;
  const apiKey = '41d19d7ac40dc14ab23df95f93b92134'; 

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      params: {
        sort: 'anime_score',
        limit: 100 
      }
    });

    const animeData: Anime[] = response.data.data;
    const mappedData = animeData.map((anime: Anime) => ({
      id: anime.id,
      title: anime.title,
      alternative_titles: anime.alternative_titles,
      main_picture: anime.main_picture,
      start_date: anime.start_date,
      end_date: anime.end_date,
      synopsis: anime.synopsis,
      mean: anime.mean,
      rank: anime.rank,
      popularity: anime.popularity,
      num_list_users: anime.num_list_users,
      num_scoring_users: anime.num_scoring_users,
      nsfw: anime.nsfw,
      genres: anime.genres,
      created_at: anime.created_at, 
      updated_at: anime.updated_at,
      media_type: anime.media_type,
      status: anime.status,
      my_list_status: anime.my_list_status,
      num_episodes: anime.num_episodes,
      start_season: anime.start_season,
      broadcast: anime.broadcast,
      source: anime.source,
      average_episode_duration: anime.average_episode_duration,
      rating: anime.rating,
      studios: anime.studios,
      paging: anime.paging
    }));
    

    return mappedData; // Return the mapped data
  } catch (error) {
    console.error('Error fetching seasonal anime:', error);
    throw new Error('Failed to fetch seasonal anime');
  }
};

export default getSeasonalAnime;
