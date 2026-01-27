function Card(props) {
    return <div id="card">
        <img src={props.img}/>
        <p>Hello {props.name}</p>
        <p>Your age: {props.age}</p>
    </div>
}

function CardGroup() {
    return <div id="container">
        <Card name = "sasha" age = "17" img="cat.jpg"/>
        <Card name = "varya" age = "16   " img="catimg.jpeg"/>
    </div>
}