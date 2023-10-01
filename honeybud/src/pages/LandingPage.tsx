import '../assets/font/ReemKufi-Regular.ttf';
import '../assets/font/ReemKufi-Medium.ttf';
import '../assets/font/ReemKufi-Bold.ttf';
import './LandingPage.css'
import {Menu} from '../components/menu/Menu';
import {Button} from '../components/button/Button';
import {Banner} from '../components/banner/Banner';
import {Strip} from '../components/strip/Strip';
import {Catalog} from '../components/catalog/Catalog';
import {Credits} from '../components/credits/Credits';
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (

    <div className="FrontPage">
      <div className= "FixedHeader">
        <Menu />
        <Link to={'/login'}>
          <Button label={"JOIN NOW"}/>
        </Link>
      </div>
        <Banner />
        <div className= "LargeStrips">
          <Strip />
          <Strip />
        </div>
        <div className= "EndofPage">
          <Catalog />
          <Credits />
        </div>
      </div>

  );
}