import {generateRandomString, generateCodeChallenge} from './Generators'

const YOUR_CLIENT_ID = '41d19d7ac40dc14ab23df95f93b92134';
const YOUR_STATE = 'YOUR_STATE';
const YOUR_REDIRECT_URI = 'YOUR_REDIRECT_URI';


export const authenticateWithMyAnimeList = async () => {
  const PKCE_CODE_VERIFIER_LENGTH = 64;
  const codeVerifier = generateRandomString(PKCE_CODE_VERIFIER_LENGTH);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  const authorizationEndpoint = `https://myanimelist.net/v1/oauth2/authorize?` +
    `response_type=code&client_id=${YOUR_CLIENT_ID}&state=${YOUR_STATE}&` +
    `redirect_uri=${YOUR_REDIRECT_URI}&code_challenge=${codeChallenge}&` +
    `code_challenge_method=plain`;

  window.location.href = authorizationEndpoint;
};

authenticateWithMyAnimeList();
