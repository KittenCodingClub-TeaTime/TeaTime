import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <div className="border border-red-600 text-center bg-red">TEST </div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
