import { generateRandomString, generateCodeChallenge } from './Generators';

export const authenticateWithMyAnimeList = async (username: string, password: string) => {
  try {
    const PKCE_CODE_VERIFIER_LENGTH = 64;
    const codeVerifier = generateRandomString(PKCE_CODE_VERIFIER_LENGTH);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    const YOUR_CLIENT_ID = '41d19d7ac40dc14ab23df95f93b92134';
    const YOUR_STATE = 'YOUR_STATE';
    const YOUR_REDIRECT_URI = 'YOUR_REDIRECT_URI';
    const YOUR_HOST_URL = 'https://myanimelist.net/v1/oauth2/authorize';

    const authorizationEndpoint =
      `${YOUR_HOST_URL}?` +
      `response_type=code` +
      `&client_id=${YOUR_CLIENT_ID}` +
      `&state=${YOUR_STATE}` +
      `&redirect_uri=${YOUR_REDIRECT_URI}` +
      `&code_challenge=${codeChallenge}` +
      `&code_challenge_method=plain` +
      `&username=${username}` +
      `&password=${password}`;

    // Simulate a successful login for demonstration purposes
    const loginSuccessful = true;  // Modify this based on actual authentication

    if (loginSuccessful) {
      console.log('Login successful!');
      // Uncomment this line to enable redirection
      window.location.href = authorizationEndpoint;
    } else {
      console.log('Login failed.');
    }
  } catch (error) {
    console.error('Error during authentication:', error);
  }
};
