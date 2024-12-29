import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NameProvider } from './assets/Context/NameContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NameProvider>
      <App />
    </NameProvider>

  </StrictMode>,
)
