import './LoginForm.css'
import React from 'react';
import {authenticateWithMyAnimeList} from '../../managers/AuthQuery'
import {Button} from '../button/Button'

const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  };

  const handleLogin = async () => {
    await authenticateWithMyAnimeList();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="LoginForm">
      <div className="LabelnField">
      <p>
        Username:</p>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className="LabelnField">
      <p>
        Password:</p>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      </div>
      <div className="LoginButton" onClick={handleLogin}>
        <Button label={"LOG IN"}/>
      </div>

    </form>
  );
};

export default LoginForm;