const bookclass = "div";
let div = document.getElementById("main");
const root = ReactDOM.createRoot(div);

let bookStyle = {
    fontSize: "25px",
    border: "2px solid black",
    width: "200px",
    paddingLeft: "15px"
}

root.render(
    <div className={bookclass} style={bookStyle}>
        <p>A Byte of Python</p>
        <p>Swaroop CH</p>
        <p>Education</p>
        <p>164</p>
    </div>
)