let headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd"
}

let headerImgStyle = {
    width: "100px",
    borderRadius: "8px"
}

let mainContainerStyle = {
    display: "flex",
    padding: "20px",
    gap: "20px"
}

let sidebarStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    borderRight: "1px solid #ddd"
}

let mainStyle = {
    flex: "4",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px"
}

let navHeaderStyle = {
    display: "flex",
    gap: "15px"
}

function Header() {
    return (
        <header style={headerStyle}>
            <img
                src="https://i.pinimg.com/736x/c8/46/b4/c846b4083c41820fd4b35cd440428582.jpg" alt="V-Mart Logo" style={headerImgStyle}/>
            <h1>V-Mart</h1>
            <nav style={navHeaderStyle}>
                <a href="#main">Main</a>
                <a href="#contacts">Contacts</a>
            </nav>
        </header>
    );
}

function BodyMain() {
    return (
        <div style={mainContainerStyle}>
            <nav style={sidebarStyle}>
                <h3 style={{fontSize: "20px"}}>Categories</h3>
                <a href="">Техніка для дому</a>
                <a href="">Електроніка</a>
                <a href="">Догляд за собою</a>
                <a href="">Іграшки для дітей</a>
            </nav>

            <div style={mainStyle}>
                <div style={{ border: "1px solid #eee", padding: "10px", textAlign: "center" }}>
                    <img src="https://content.rozetka.com.ua/goods/images/big/603192630.jpg" style={{ width: "100%", height: "150px", background: "#eee" }}></img>
                    <p>ыва</p>
                    <p>ыва</p>
                </div>
                <div style={{ border: "1px solid #eee", padding: "10px", textAlign: "center" }}>
                    <img src="https://content.rozetka.com.ua/goods/images/big/631340288.jpg" style={{width: "100%", height: "150px", background: "#eee"}}></img>
                    <p>Sharp MS252AE Black</p>
                    <p>3 199₴</p>
                </div>
            </div>
        </div>
)}