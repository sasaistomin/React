import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Импортируем созданные страницы
import { Home } from './pages/Home';
import { Card } from './pages/Card';
import userData from './data/prouduct.json'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', borderBottom: '1px solid' }}>
        <Link style={{ marginRight: '10px' }} to="/">Главная</Link>
        <Link to="/about">Товар</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;