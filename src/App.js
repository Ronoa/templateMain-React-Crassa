import React from 'react'

import store, { history, persistor } from './store/configureStore'
import createRoutes from './routes'
import Root from './containers/Root'

const routes = createRoutes(history)

const App = () => (
  <Root persistor={persistor} store={store}>
    {routes}
  </Root>
)

export default App

