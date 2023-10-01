import {authenticateWithMyAnimeList} from '../managers/AuthQuery'

const LoginButton = () => {
    const handleLogin = async () => {
      await authenticateWithMyAnimeList();
    };
  
    return (
      <button onClick={handleLogin}>Login</button>
    );
  };
  
  export default LoginButton;