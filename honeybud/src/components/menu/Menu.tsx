import './Menu.css'; 
import { Link } from 'react-router-dom';

type TabInfo = {
    name: string
}

const Tab: React.FC<TabInfo> = ({name}) => {
    return <div className="tab">{name}</div>;
};

export const Menu = () => {
    const tabs = ['home', 'catalog',  'about'];

    return (
        <div className = "MenuBar">
            {tabs.map((tabName, index) => (
                <Tab key={index} name={tabName} />
            ))}
    </div>
    )
}
