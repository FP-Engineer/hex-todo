import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './app';
import { StrictMode } from 'react';

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
