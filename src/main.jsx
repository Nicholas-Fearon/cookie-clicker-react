import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/app.css';
import '../src/styles/header.css';
import '../src/styles/upgradeButton.css'
import '../src/styles/resetButton.css';
import '../src/styles/cookieButton.css';
import '../src/styles/cookieCounter.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
