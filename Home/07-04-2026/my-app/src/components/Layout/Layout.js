import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="app-grid">
      <header>Магазин</header>
      <div className="main-content">
        <aside>
          <nav>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/products">Товары</Link></li>
            </ul>
          </nav>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>Магазин 2026</footer>
    </div>
  );
};