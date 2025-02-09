import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomHooks from './CustomHooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHooks  />
  </StrictMode>,
)
