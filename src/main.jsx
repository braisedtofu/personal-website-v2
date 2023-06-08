import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/Global.css';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { NightModeProvider } from './NightModeContext'; // Import the NightModeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <NightModeProvider> {/* Wrap BrowserRouter with NightModeProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NightModeProvider>,
);
