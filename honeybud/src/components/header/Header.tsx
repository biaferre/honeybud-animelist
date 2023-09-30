import { Menu } from '../menu/Menu';
import './Header.css';
import honeybud from '../../assets/images/honeybud-icon.png';

export const Header = () => {
  return (
    <div className="Header">
      <div className="centeredContent">
        <div className="MenuBar">
          <Menu />
        </div>
        <div className="LogoImg">
          <img src={honeybud} alt="Honeybud Logo" style={{objectFit: 'cover'}} className= "LogoImg" />
        </div>
      </div>
    </div>
  );
}
