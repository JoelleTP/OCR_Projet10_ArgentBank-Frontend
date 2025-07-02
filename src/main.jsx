import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from "./components/Router/Router.jsx"
import './assets/style/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
