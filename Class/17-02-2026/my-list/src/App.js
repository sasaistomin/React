import './App.css';
import Navigation from './components/MyList/MyList';
import Gallery from "./components/Gallery/Gallery";

const menuItems = [
    { id: 1, label: "Main" },
    { id: 2, label: "Katalog" },
    { id: 3, label: "Contact" }
];

const galleryItems = [
    {id: 1, url: "https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2020/6/25/0fc978aba29e466e8eb4ffc946532d5e.max-1200x800.jpg", title: "photo 1", autor: "Ira" },
    {id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGRPzn7p0iresNG3SRxzEciTvOxDJeZT2EQ&s", title: "photo 2", autor: "Artem" },
    {id: 3, url: "https://www.5.ua/media/pictures/original/294300.jpg?t=1725796642", title: "photo 3", autor: "Kiril" }
]

function App() {
    return (
        <div className="App">
            <Navigation items={menuItems} activeId={2} />
            <Gallery items={galleryItems}/>
        </div>
    );
}

export default App;