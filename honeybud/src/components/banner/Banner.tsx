import './Banner.css';
import honeybud from '../../assets/images/honeybud-banner.png';

export const Banner = () => {
  return (
    <div className="Banner">
        <img src={honeybud} alt="Honeybud Banner"  className= "BannerImg" />
    </div>
  );
}