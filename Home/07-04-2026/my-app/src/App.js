import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Product } from './components/Product/Product';
import './App.css';

const productsLoader = async () => {
  const response = await fetch('/products.json');
  if (!response.ok) throw new Error('Failed to load');
  return response.json();
};

const HomePage = () => (
  <div>
    <h1>Магазин</h1>
  </div>
);

const ProductsPage = () => {
  const products = useLoaderData();
  return (
    <div>
      <h2>Список товаров</h2>
      <div className="products-list">
        {products.map(item => <Product key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        loader: productsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;