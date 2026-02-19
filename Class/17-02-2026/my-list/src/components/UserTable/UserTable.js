import styles from './UserTable.module.css';

function UserTableItem({item}) {
    const style = {color: item.age < 20 ? "red":"green"};
    return (
        <div style={style}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.city}</p>
        </div>
    )
}

function Table({items}) {
    return (
        <div>
            {items.map((item) => (
                <UserTableItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Table;