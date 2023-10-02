import axios from 'axios';

const clientId = '41d19d7ac40dc14ab23df95f93b92134';
const clientSecret = '5b03b659a3ca4e3ecd99389640d63a94b698447d75d79e03fc3d77e7cf055738';
const redirectUri = 'http://localhost:3000/callback';

export const requestOAuthAuthentication = (codeVerifier: string) => {
    const oauthUrl = new URL('https://myanimelist.net/v1/oauth2/authorize');
    oauthUrl.searchParams.append('response_type', 'code');
    oauthUrl.searchParams.append('client_id', clientId);
    oauthUrl.searchParams.append('state', codeVerifier); 
    oauthUrl.searchParams.append('redirect_uri', redirectUri);
    oauthUrl.searchParams.append('code_challenge', codeVerifier);
    oauthUrl.searchParams.append('code_challenge_method', 'plain');

    console.log(oauthUrl.toString());
    window.location.href = oauthUrl.toString();
    
};
  
export const exchangeAuthorizationCode = async (code: string, codeVerifier: string) => {
    const tokenUrl = 'https://myanimelist.net/v1/oauth2/token';
    try {
      const response = await axios.post(tokenUrl, {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      });
      console.log('Response received:', response.data); 

      return response.data; 
    } catch (error: any) {
        if (error.response) {
          console.error('Error Response', error.response.data);
        } else if (error.request) {
          console.error('Error Request', error.request);
        } else {
          console.error('Error Message', error.message);
        }
      }
      
  };