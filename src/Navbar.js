export default function Navbar(props) {
    function renderFarm() {
        return props.menuCategoriesList.map(function (item) {
            return (
                <li key={item.name} className="category-name">{item.lableFarsi}</li>
            );
        });
    }

    return (
        <ul className="navbar">{renderFarm()}</ul>
    );
  };