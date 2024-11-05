import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Resume from './Resume.jsx'
import Resume from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
