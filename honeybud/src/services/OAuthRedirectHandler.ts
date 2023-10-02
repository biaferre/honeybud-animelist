import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { exchangeAuthorizationCode } from './authService';

const OAuthRedirectHandler: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const codeVerifier = sessionStorage.getItem('codeVerifier'); 
    if (code && codeVerifier) {
      exchangeAuthorizationCode(code, codeVerifier);
    }
  }, [location]);

  return null; 
};

export default OAuthRedirectHandler;
