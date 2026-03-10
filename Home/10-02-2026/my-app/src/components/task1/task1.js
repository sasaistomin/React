import styles from './task1.module.css';

function Filme(props) {
    return (
        <div className={styles.main}>
            <img className={styles.photo} src={props.img}/>
            <p>{props.nameFilme}</p>
            <p>{props.FioRes}</p>
            <p>{props.ear}</p>
        </div>
    );
};

export function GroupTask1(props) {
    return (
        <div className={styles.group}>
            <Filme img="https://www.hauweele.net/~gawen/blog/wp-content/uploads/2014/11/interstellar.jpg" nameFilme="Интерстеллар" FioRes="Кристофер Нолан" ear="6 ноября 2014г."/>
            <Filme img="https://i.ytimg.com/vi/xZ9X_XGgQVw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9g5RrkfHqPzjXuI0f0XyzWznlIg" nameFilme="Груз 200" FioRes="Алексей Балабанов" ear="14 июня 2007г. "/>
        </div>
    );
}

export default Filme;
