import './LoginPage.css'
import LoginForm from "../../components/logincomponents/LoginForm";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
      <div className = "LoginPage">
        <Link to={'/'}><div className="HeaderImg" /></Link>
        <div className = "LoginInfo">
          <h1>Login with your My Anime List account:</h1>
          <LoginForm />
        </div>
      </div>
    );
  }
  