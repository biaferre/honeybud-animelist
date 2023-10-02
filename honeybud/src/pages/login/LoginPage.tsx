import './LoginPage.css'
import { requestOAuthAuthentication } from '../../services/authService';
import { generateCodeVerifier } from '../../utilities/codeVerifier'
import { LoginButton } from '../../components/logincomponents/LoginButton';
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const handleLogin = (event: React.FormEvent) => {
      console.log("Redirecting to authorization..")
      event.preventDefault();
      const codeVerifier = generateCodeVerifier();
      requestOAuthAuthentication(codeVerifier);
    };

    return (
      <form onSubmit={handleLogin}>
      <div className = "LoginPage">
        <Link to={'/'}><div className="HeaderImg" /></Link>
          <div className = "LoginInfo">
            <h1>Login with your My Anime List account:</h1>
            <div className="LoginButton">
          <LoginButton label="LOG IN WITH MAL" type="submit" />
      </div>        
      </div>
      </div>
      </form>
    );
  }
  