import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from "./components/Router/Router.jsx"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import './assets/style/main.css'
import { rootReducers } from './Reducers/index.js'

const store = configureStore({
  reducer: rootReducers,
  devTools: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
