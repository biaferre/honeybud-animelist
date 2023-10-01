import { generateRandomString, generateCodeChallenge } from './Generators';
import { initialAuthState } from './AuthState';
import refreshAccessToken from './RefreshToken';
import axios from 'axios';

const YOUR_CLIENT_ID = '41d19d7ac40dc14ab23df95f93b92134';
const YOUR_STATE = initialAuthState;
const YOUR_REDIRECT_URI = '/home';
const MYANIMELIST_TOKEN_ENDPOINT = 'https://myanimelist.net/v1/oauth2/token';

const PROXY_SERVER_ENDPOINT = 'http://localhost:3000/auth';

export const authenticateWithMyAnimeList = async (
  username: string,
  password: string,
  refreshToken?: string
) => {
  try {
    // Send the request to the proxy server
    const response = await axios.post(PROXY_SERVER_ENDPOINT, {
      username,
      password,
      refreshToken,
    });

    if (response.status === 200) {
      console.log('Login successful!');
      console.log('Access token:', response.data.access_token);
      console.log('Refresh token:', response.data.refresh_token);
    } else {
      console.log('Login failed.');
    }
  } catch (error) {
    console.error('Error during authentication:', error);
  }
};
