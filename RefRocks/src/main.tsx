import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import onRender from './utils/render.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profiler id="appid" onRender={onRender}>
      <App />
    </Profiler>
  </StrictMode>,
)
