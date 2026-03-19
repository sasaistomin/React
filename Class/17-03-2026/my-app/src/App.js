import logo from './logo.svg';
import './App.css';
import { Card1 } from './components/card1/card1';
import { Card2 } from './components/card2/card2';
import { Card3 } from './components/card3/card3';

function App() {
    return (
        <div className="App">
            <Card1 className="card1"/>
            <Card2 className="card2"/>
            <Card3 className="card3"/>
        </div>
    );
}

export default App;
