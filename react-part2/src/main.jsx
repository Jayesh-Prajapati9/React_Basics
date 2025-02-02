import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Children from './Children.jsx'
import List_And_Keys from './List_And_Keys.jsx'
import Error_Boundary from './Error_Boundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Error_Boundary/>
    {/* <List_And_Keys/> */}
    {/* <Children/> */}
  </StrictMode>,
)
