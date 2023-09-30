import './CatalogImageDisplay.css'

export type CatalogImageInfo = {
    name: string
    source: string
}

export const CatalogImageDisplay: React.FC<CatalogImageInfo> = ({name, source}) => {
    return <img src= {source} alt= {name} className="ImgDisplay"/>;
};