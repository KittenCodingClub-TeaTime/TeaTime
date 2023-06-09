/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const container = document.getElementById('root');
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
