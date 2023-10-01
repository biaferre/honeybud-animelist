import './LoginPage.css'
import honeybudicon from '../assets/images/honeybud-icon.png'
import LoginForm from "../components/logincomponents/LoginForm";

export const LoginPage = () => {
    return (
      <div className = "LoginPage">
        <div className="HeaderImg" />
        <div className = "LoginInfo">
          <h1>Login with your My Anime List account:</h1>
          <LoginForm />
        </div>
      </div>
    );
  }
  