// let ... = document.getElementById("...");
// const root = ReactDOM.createRoot(...);
// root.render();

let header = document.getElementById("header");
let div = document.getElementById("content")

const rootHeader = ReactDOM.createRoot(header);
rootHeader.render(
    <Header/>
);

const rootDiv = ReactDOM.createRoot(div);
rootDiv.render(
    <BodyMain/>
);