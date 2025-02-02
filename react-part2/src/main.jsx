import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Children from './Children.jsx'
import List_And_Keys from './List_And_Keys.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List_And_Keys/>
    {/* <Children/> */}
  </StrictMode>,
)
