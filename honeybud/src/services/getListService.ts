import axios from 'axios';

export async function getAnimeList(username: string, status: string, sort: string, limit = 100, offset = 0) {
  const url = `http://localhost:3002/animeList`;
  const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
    console.error('Access token not found. Please log in.');
    }

  const params: any = {
    fields: 'id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,genres,created_at,updated_at,media_type,status,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,studios,list_status',
    limit,
    offset,
  };
  if (status) params.status = status;
  if (sort) params.sort = sort;

  const response = await axios.get(url, {
    headers: {
      'Authorization': accessToken,
    },
    params,
  });

  return response.data;
}
