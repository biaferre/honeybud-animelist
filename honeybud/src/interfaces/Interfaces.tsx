
export interface Item {
    id: number;
    name: string;
  }

export interface CollectionProps {
    data: Anime[];
  }
  
export interface TokenResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
  };
  

export interface Anime {
    id: number;
    title: string;
    main_picture: MainPicture;
    alternative_titles: AlternativeTitles;
    start_date: string | null;
    end_date: string | null;
    synopsis: string | null;
    mean: number | null;
    rank: number | null;
    popularity: number | null;
    num_list_users: number;
    num_scoring_users: number;
    nsfw: string | null;
    genres: Genre[];
    created_at: string; // Assuming date-time format
    updated_at: string; // Assuming date-time format
    media_type: string;
    status: 'finished_airing' | 'currently_airing' | 'not_yet_aired';
    my_list_status: MyListStatus;
    num_episodes: number;
    start_season: StartSeason;
    broadcast: Broadcast;
    source: string | null;
    average_episode_duration: number | null;
    rating: 'g' | 'pg' | 'pg_13' | 'r' | 'r+' | 'rx' | null;
    studios: AnimeStudio[];
    paging: object;
  }
  
export interface Genre {
    id: number;
    name: string;
  }
  
export interface AnimeStudio {
    id: number;
    name: string;
  }
  
  export interface MainPicture {
    large: string | null;
    medium: string;
  }

  export interface AlternativeTitles {
    synonyms: string[] | null;
    en: string | null;
    ja: string | null;
  }

  export interface MyListStatus {
    status: 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch' | null;
    score: number | null;
    num_episodes_watched: number;
    is_rewatching: boolean;
    start_date: string | null;
    finish_date: string | null;
    priority: number;
    num_times_rewatched: number;
    rewatch_value: number;
    tags: string[];
    comments: string;
    updated_at: string; // Assuming the date-time format is string
  }

  export interface StartSeason {
    year: number | null;
    season: 'winter' | 'spring' | 'summer' | 'fall' | null;
  }
  
  
  export interface Broadcast {
    day_of_the_week: string;
    start_time: string | null;
  }