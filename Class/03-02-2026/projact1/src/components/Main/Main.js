import styles from './Main.module.css';

const Main = () => (
    <div className={styles.mainContainerStyle}>
        <aside className={styles.sidebarStyle}>
            <h2>Категорії</h2>
            <button>Техніка для дому</button>
            <button>Електроніка</button>
            <button>Догляд за собою</button>
            <button>Іграшки для дітей</button>
        </aside>

        <main className={styles.mainStyle}>
            <div className={styles.productCard}>
                <img src="https://img-cdn.heureka.group/v1/e2448739-5b44-5887-bcd0-d3f2a6514280.jpg" alt="Sharp MS252AE Black" />
                <p>Sharp MS252AE Black</p>
            </div>

            <div className={styles.productCard}>
                <img src="https://img-cdn.heureka.group/v1/e2448739-5b44-5887-bcd0-d3f2a6514280.jpg" alt="Sharp MS252AE Black" />
                <p>Sharp MS252AE Black</p>
            </div>
        </main>
    </div>
);

export default Main;