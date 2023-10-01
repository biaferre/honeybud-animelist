import axios from 'axios';

const MYANIMELIST_TOKEN_ENDPOINT = 'https://myanimelist.net/v1/oauth2/token';

const refreshAccessToken = async (refreshToken: string) => {
  try {
    const clientCredentials = 'YOUR_CLIENT_ID:YOUR_CLIENT_SECRET';
    const basicAuthHeader = `Basic ${Buffer.from(clientCredentials).toString('base64')}`;

    const response = await axios.post(
      MYANIMELIST_TOKEN_ENDPOINT,
      `grant_type=refresh_token&refresh_token=${refreshToken}`,
      {
        headers: {
          'Authorization': basicAuthHeader,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new Error('Failed to refresh access token');
  }
};

export default refreshAccessToken;
