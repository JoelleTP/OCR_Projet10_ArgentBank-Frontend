import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from "./components/Router/Router.jsx"
import { Provider } from "react-redux"
import { store } from './app/store.js'
import './assets/style/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
