import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//components
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ResultContextProvider from './contexts/ResultContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </ResultContextProvider>
);


