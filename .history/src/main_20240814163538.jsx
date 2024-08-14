import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import mediaQueries from './mediaQueries.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <mediaQueries/>
  </StrictMode>,
)
