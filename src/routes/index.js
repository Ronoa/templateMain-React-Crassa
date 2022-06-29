import React, { Fragment } from 'react'
import { Route, Routes, Redirect } from 'react-router-dom'
import { ProtectedRoute } from 'components/Auth/ProtectedRoute'
import loadable from '@loadable/component'
import Loading from 'components/Common/Loading'
import Authentication from 'containers/page/Autentication'

const Main = loadable(() => import('../containers/Main'), {
  fallback: <Loading />,
})
const ProfilePage = React.lazy(() => import('containers/page/Profile'))
const Dashboard = React.lazy(() => import('containers/page/Dashboard'))

const ElementeRouterProtect = (componente) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <ProtectedRoute>{componente}</ProtectedRoute>
    </React.Suspense>
  )
}

const routes = (history) => (
  <Fragment>
    <Routes history={history}>
      <Route
        exact
        path='/'
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      >
        <Route
          path='/myprofile'
          element={ElementeRouterProtect(<ProfilePage />)}
        />
        <Route
          element={ElementeRouterProtect(<Dashboard />)}
          path='/dashboard'
        />
      </Route>
      <Route
        path='/login'
        element={<Authentication stateCurrent={'login'} />}
      />
      <Route
        path='/register'
        element={<Authentication stateCurrent={'register'} />}
      />
    </Routes>

    {/* <Route component={Callback} exact path='/callback' /> */}
  </Fragment>
)

export default routes

// const Dashboard = loadable(async () => {
//   const { 'default': AsyncDashboard } = await import(/* webpackPrefetch: true */ 'containers/Root/Dashboard')

//   return props => <AsyncDashboard {...props} />
// }, {
//   ssr     : true,
//   fallback: <Loading />
// })

// const Dashboard2 = loadable(() => import('components/Counter'), { fallback: <Loading /> })

// const Main = loadable(() => import('../containers/Main'), { fallback: <Loading /> })
// const Callback = loadable(() => import('../containers/Callback'), { fallback: <Loading /> })

// const routes = history =>   (
//   <ConnectedRouter history={history}>
//     <Main>
//       <Switch>

//         <Route component={Dashboard} path='/' />
//         <Route component={Dashboard2} path='/counter/:jobId?' />
//         <Route component={Callback} exact path='/callback' />
//         <Redirect from='*' to='/' />
//       </Switch>
//     </Main>
//     {/* <Route component={Dashboard} exact path='/' /> */}
//   </ConnectedRouter>
// )

// export default routes
