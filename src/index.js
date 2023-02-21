import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { PlayersProvider } from './context/players.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <PlayersProvider>
      <App />
    </PlayersProvider>
  </React.StrictMode>
)

serviceWorkerRegistration.register()
