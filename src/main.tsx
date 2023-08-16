import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig } from './enviroment/Enviroment.ts'

const msalInstance = new PublicClientApplication(msalConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App instance={msalInstance} />
  </React.StrictMode>,
)
