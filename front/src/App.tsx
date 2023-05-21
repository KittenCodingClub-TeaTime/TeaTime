import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
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
    </div>
  );
}

export default App;
