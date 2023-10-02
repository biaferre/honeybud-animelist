import React from 'react';
import './Collection.css';
import { Anime } from '../../interfaces/Interfaces';  // Adjust the import path

interface CollectionProps {
  data: Anime[];
}

export const Collection: React.FC<CollectionProps> = ({ data }) => {
    
  return (
    <div className="CollectionList">
      {data.map((item: Anime) => (
        <div key={item.id} className="CollectionItem">
            <img src={item.main_picture.medium} alt={item.title || 'Anime Image'} />
        </div>
      ))}
    </div>
  );
};

export default Collection;
