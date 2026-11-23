import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './context/ThemeContext.jsx';

import App from './App.jsx';

import './styles/main.scss';
import './styles/tw.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider initial="light">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);