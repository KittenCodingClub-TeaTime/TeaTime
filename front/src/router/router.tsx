import { createBrowserRouter } from 'react-router-dom';
import { Login, Register, Dashboard } from '../pages';
import { AuthoriseUser } from '../middleware/auth';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthoriseUser>
        <App />
      </AuthoriseUser>
    ),
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    children: [],
  },
  {
    path: '/register',
    element: <Register />,
    children: [],
  },
]);

export default router;
