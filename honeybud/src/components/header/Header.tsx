import { Menu } from '../menu/Menu';
import './Header.css';
import { Button } from '../button/Button';

export const Header = () => {
  return (
    <div className="Header">
      <div className="centeredContent">
        <div className="MenuBar">
          <Menu />
        </div>
          <Button label={'JOIN NOW'} />
      </div>
    </div>
  );
}
