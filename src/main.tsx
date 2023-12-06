import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './utils/revealList.ts'

import './sass/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
