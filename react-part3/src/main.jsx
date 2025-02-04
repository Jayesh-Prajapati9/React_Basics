import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chat from './Chat.jsx'
import FocusInput from './FocusInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Chat /> */}
    <FocusInput/>
  </StrictMode>,
)
