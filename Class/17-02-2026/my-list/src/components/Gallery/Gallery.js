import styles from './Gallery.module.css';

function GalleryItem({ item }) {
    return (
        <div className={styles.item}>
            <img src={item.url} alt={item.title} className={styles.image} />
            <h3>{item.title}</h3>
            <p>Author: {item.autor}</p>
        </div>
    );
}

function Gallery({ items }) {
    if (!items || items.length === 0) {
        return <p>Нет изображений для отображения</p>;
    }

    return (
        <div className={styles.galleryGrid}>
            {items.map((image) => (
                <GalleryItem key={image.id} item={image} />
            ))}
        </div>
    );
}

export default Gallery;