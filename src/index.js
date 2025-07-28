import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminPanel from './components/Admin';
import AlMahmoodSchoolWebsite from './components/pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AdminPanel/> */}
  </React.StrictMode>
);

reportWebVitals();
