import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Login from './html-pages/Login'
import Signup from './html-pages/Signup'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup />
  </StrictMode>
)
