import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dark from './Components/arrows/arrows.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Dark />
  </React.StrictMode>
);
