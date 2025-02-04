import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Global.css'
import App from './App.jsx'

// main renderiza la App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
