import React from 'react';
import { requestOAuthAuthentication } from '../../services/authService';
import { generateCodeVerifier } from '../../utilities/codeVerifier'
import { LoginButton } from './LoginButton';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  //console.log('File is loaded');

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // prevent the form from submitting in the default way
    const codeVerifier = generateCodeVerifier();
    requestOAuthAuthentication(codeVerifier);
  };
  

  return (
    <form onSubmit={handleLogin}>
      <div className="LoginForm">
        <div className="LabelnField">
          <p>Username:</p>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="LabelnField">
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      <div className="LoginButton">
        <LoginButton label="LOG IN" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
