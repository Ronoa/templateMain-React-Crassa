import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from 'components/context/authContext'

if (module.hot) module.hot.accept()

const render = (Component, type = 'render') => {
  ReactDOM[type](
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

if (process.env.NODE_ENV === 'production')
  loadableReady(() => {
    render(App, 'hydrate')
  })
else render(App)

