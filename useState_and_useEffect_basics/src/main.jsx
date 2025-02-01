import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './Todo.jsx' 
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
  // <Todo/>
  <Clock/>  
)
