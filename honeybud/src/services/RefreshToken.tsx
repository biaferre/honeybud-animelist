import axios from 'axios';

const MYANIMELIST_TOKEN_ENDPOINT = 'https://myanimelist.net/v1/oauth2/token';

const refreshAccessToken = async (refreshToken: string) => {
  try {
    const clientCredentials = '41d19d7ac40dc14ab23df95f93b92134:5b03b659a3ca4e3ecd99389640d63a94b698447d75d79e03fc3d77e7cf055738';
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
