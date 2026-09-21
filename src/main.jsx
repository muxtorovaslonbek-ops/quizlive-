import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './i18n/LanguageContext';
import { syncServerClock } from './lib/serverClock';
import './index.css';

// Measure device-clock error vs. the server so question timers are accurate
// even when a phone/PC clock is wrong.
syncServerClock();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
