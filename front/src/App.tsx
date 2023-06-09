import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { authenticateUserQuery } from './hooks';
import { Navbar } from './components';
function App() {
  const { mutate, isLoading } = authenticateUserQuery();

  useEffect(() => {
    mutate();
  }, []);
  return (
    <main>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
