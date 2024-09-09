import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wrappers from './Wrappers'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
     <Wrappers/>
   
  </StrictMode>,
)
