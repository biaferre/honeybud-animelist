import React from 'react';
import { authenticateWithMyAnimeList } from '../../managers/AuthQuery';
import { Button } from '../button/Button';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    authenticateWithMyAnimeList(username, password);
  };

  return (
    <form onSubmit={handleLogin}> {/* Attach handleLogin to form submission */}
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
        <Button label="LOG IN" />
      </div>
    </form>
  );
};

export default LoginForm;
