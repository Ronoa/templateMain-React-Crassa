import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import { connectRouter } from 'connected-react-router'

import theme from './theme'
import counter from './counter'

export default history => combineReducers({
  router         : connectRouter(history),
  [theme.store]  : theme.reducer,
  [counter.store]: counter.reducer
})

export function* rootSaga() {
  yield all([
    ...counter.takes
  ])
}
