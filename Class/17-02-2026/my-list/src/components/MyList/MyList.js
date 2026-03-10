import styles from './MyList.module.css';

function NavigationItem(props) {
    return (
        <li className={props.isActive ? styles.active : ''}>
            {props.item.label} {props.isActive && "(active)"}
        </li>
    );
}

function Navigation(props) {
    return (
        <ul>
            {props.items.map((menuItem) => (
                <NavigationItem
                    key={menuItem.id}
                    item={menuItem}
                    isActive={menuItem.id === props.activeId}
                />
            ))}
        </ul>
    );
}

export default Navigation;