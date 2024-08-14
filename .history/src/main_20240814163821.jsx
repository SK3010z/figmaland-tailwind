import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MediaQueries from './mediaQueries.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <MediaQueries/>
  </StrictMode>,
)
