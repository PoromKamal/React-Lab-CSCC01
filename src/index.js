import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Override fetch
// window.fetch = async function (...args) {
//     const response = await originalFetch('/manufacturers.json');
//     const data = await response.json();
//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
// };
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);