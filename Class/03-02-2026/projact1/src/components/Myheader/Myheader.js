import styles from './Myheader.module.css';

const Myheader = () => (
    <header class = {styles.headerStyle}>
        <img src="https://i.pinimg.com/736x/c8/46/b4/c846b4083c41820fd4b35cd440428582.jpg" alt="V-Mart Logo" class={styles.headerImgStyle}/>
        <h1>V-Mart</h1>
        <nav class={styles.navHeaderStyle}>
            <a href="#main">Main</a>
            <a href="#contacts">Contacts</a>
        </nav>
    </header>
);

export default Myheader;
