import styles from './card1.module.css';
import { useState } from 'react';

export function Card1() {
    const [title, setTitle] = useState('Basic')
    const [price, setPrice] = useState('$2.99')
    const [description, setDescription] = useState(['Sample Text Hare', 'Other Test Title', 'Text Space Goes Here ', 'Description Space'])

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handlePriceChange(event) {
        setPrice(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    return (
        <div className={styles.card}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}</p>
            <div className={styles.dep}>{description.map((item, index) => (
                <p key={index}>{item}</p>
            ))}</div>
            <button className={styles.but}>SELECT PACKAGE</button>
        </div>
    )
}
