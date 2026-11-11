import '@/styles/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import Providers from './components/providers/providers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
