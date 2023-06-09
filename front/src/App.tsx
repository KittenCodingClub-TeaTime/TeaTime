import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainScene from './scenes/MainScene';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <div className="text-center text-red border border-orange-500  text-stone-400">Test</div>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <MainScene></MainScene>
    </div>
  );
}

export default App;
