import styles from './task2.module.css';
import logo from '.../logo.svg';


function MyFio(props) {
    return(
        <div>
            <img src={props.img}/>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.city}</p>
            <p>{props.ear}</p>
            <p>{props.ctek}</p>
        </div>
    );
}

export function PropsFio(props) {
    return (
        <div >
            <MyFio img="logo.svg" name="Istomin Sasha" email="sasaistomin42@gmail.com" city="Odessa" ear="0 ear" ctek="Django-Python and React-JavaScript"/>
        </div>
    );
}

export default MyFio;
