import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/*',
    element:  <App /> 
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

