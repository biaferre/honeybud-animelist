import axios from 'axios';

export const clientId = '41d19d7ac40dc14ab23df95f93b92134';
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
  try {
    const data = new URLSearchParams();
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);  // Add this line
    data.append('grant_type', 'authorization_code');
    data.append('code', code); // Use the passed code directly, not from sessionStorage
    data.append('redirect_uri', redirectUri);
    data.append('code_verifier', codeVerifier);

    const response = await axios.post('http://localhost:3002/callback', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
