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
        <img src={honeybud} alt="Honeybud Logo" style={{ width: '15%', height: '15%', objectFit: 'cover'}} className= "LogoImg" />
      </div>
    </div>
  );
}
