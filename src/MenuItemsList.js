import numberToPersian from './numberToPersian';

export default function MenuItemsList(props) {
    function renderFarm() {
        return props.menuItems.map(function(item) {
            return (
                <li key={item.id} className="menu-item">
                    <div className="menu-item-photo">
                        <img src={item.photo} />
                    </div>
                    <div className="menu-item-content">
                        <div className="menu-item-content-up-side">
                            <h4>{item.name}</h4>
                            <span>{numberToPersian(item.price)}</span>
                        </div>
                        <p>{item.description}</p>
                    </div>
                </li>
            );
        });
    }
    return (
        <div className="menu-items-list">
            <h3>{props.categoryName}</h3>
            <ul>{renderFarm()}</ul>
        </div>
    );
};