import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { exchangeAuthorizationCode } from './authService';

export const OAuthRedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const codeVerifier = sessionStorage.getItem('codeVerifier');

    const fetchData = async () => {
      if (code && codeVerifier) {
        try {
          const tokenData = await exchangeAuthorizationCode(code, codeVerifier);
          console.log('Token Data:', tokenData);
          navigate('/home');
        } catch (error: any) {
          setError('An error occurred while exchanging the authorization code.');
        }
      } else {
        setError('Code or codeVerifier is missing.');
      }
    };

    fetchData();
  }, [location, navigate]);

  return error ? <div>{error}</div> : null;
};

export default OAuthRedirectHandler;

