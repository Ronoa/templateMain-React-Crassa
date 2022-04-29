import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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

// const Dashboard2 = loadable(async () => {
//   const { 'default': AsyncDashboard } = await import(/* webpackPrefetch: true */ 'components/Counter')

//   return props => <AsyncDashboard {...props} />
// }, {
//   ssr     : true,
//   fallback: <Loading />
// })

const Dashboard2 = loadable(() => import('components/Counter'), { fallback: <Loading /> })

const Main = loadable(() => import('../containers/Main'), { fallback: <Loading /> })
const Callback = loadable(() => import('../containers/Callback'), { fallback: <Loading /> })

const routes = history =>   (
  <ConnectedRouter history={history}>
    <Main>
      <Switch>
        <Route component={Callback} exact path='/callback' />
        <Route exact  path='/' render={() => <Redirect to='/home/jobs' />}  />
        <Route component={Dashboard} path='/home' />
        <Route component={Dashboard2} path='/counter/:jobId?' />
      </Switch>
    </Main>
    {/* <Route component={Dashboard} exact path='/' /> */}
  </ConnectedRouter>
)

export default routes
