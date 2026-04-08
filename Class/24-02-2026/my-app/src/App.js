import { Header } from './components/Header/Header';
import { Nav } from './components/Navigation/Navigation';
import { Main } from './components/MainContent/MainContent';
import { Footer } from './components/Footer/Footer';
import { Sidebar } from './components/Sidebar/Sidebar';
import { NAV_ITEMS, SIDEBAR_LINKS } from './data'; 

const App = () => {
  return (
    <>
      <Header 
        version="v1.1" 
        subtitle="Рефакторинг: компоненты разделены" 
      />
      
      <Nav items={NAV_ITEMS} />
      
      <div className="layout">
        <Main />
        <Sidebar sections={SIDEBAR_LINKS} />
      </div>
      
      <Footer />
    </>
  );
};

export default App;