import './Catalog.css'
import { CatalogImageCollection } from './CatalogImageCollection'


export const Catalog = () => {
    return (
            <div className= "Catalog">
                <h1><b>THE CLASSIC, THE TRENDY AND THE CULT.</b></h1>
                <div>
                    <CatalogImageCollection />
                </div>
                <p>we don't discriminate. log all of your anime from<br />over 100000 production companies.</p>
            </div>
    )
}