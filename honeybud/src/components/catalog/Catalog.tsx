import './Catalog.css'
import { CatalogImageCollection } from './CatalogImageCollection'


export const Catalog = () => {
    return (
            <div className= "Catalog">
                <p><b>THE CLASSIC, THE TRENDY AND THE CULT.</b></p>
                <div className = "CatalogImgs">
                    <CatalogImageCollection />
                </div>
                <p>we don't discriminate. log all of your anime from<br />over 100000 production companies.</p>
            </div>
    )
}