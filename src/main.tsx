import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'

import { Toaster } from 'react-hot-toast'

import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#5E60CE',
          color: '#fff',
          fontWeight: 'bold'
        }
      }}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
