import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import loadable from '@loadable/component'

import Loading from 'components/Common/Loading'

const Dashboard = loadable(async () => {
  const { 'default': AsyncDashboard } = await import(/* webpackPrefetch: true */ 'containers/Root/Dashboard')

  return props => <AsyncDashboard {...props} />
}, {
  ssr     : true,
  fallback: <Loading />
})

const Main = loadable(() => import('../containers/Main'), { fallback: <Loading /> })
const Callback = loadable(() => import('../containers/Callback'), { fallback: <Loading /> })

const routes = history =>   (
  <ConnectedRouter history={history}>
    <Switch>
      <Route component={Callback} exact path='/callback' />
      <Main>
        <Route component={Dashboard} exact path='/:jobId?' />
      </Main>
    </Switch>
    {/* <Route component={Dashboard} exact path='/' /> */}
  </ConnectedRouter>
)

export default routes
