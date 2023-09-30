import './CatalogImageCollection.css'
import {CatalogImageInfo} from './CatalogImageDisplay'
import {CatalogImageDisplay} from './CatalogImageDisplay'

import sailormoonbanner from '../../assets/images/sailormoon.jpeg';
import metropolisbanner from '../../assets/images/metropolis.jpg';
import attackontitanbanner from '../../assets/images/attackontitan.jpeg';


export const CatalogImageCollection: React.FC = () => {
  const catalogImages: CatalogImageInfo[] = [
    {
        name: 'Sailor Moon Banner',
        source: sailormoonbanner
    },
    {
        name: 'Attack On Titan Banner',
        source: attackontitanbanner
    },
    {
        name: 'Metropolis Banner',
        source: metropolisbanner
    }
  ];

  return (
    <div className="CatalogImageCollection">
        {catalogImages.map((image, index) => (
            <CatalogImageDisplay key={index} name={image.name} source={image.source}/>
        ))}
    </div>
  );
};