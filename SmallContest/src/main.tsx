import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContextProvide from './context/ContextProvide.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvide>
      <App />
    </ContextProvide>
   
  </StrictMode>,
)
