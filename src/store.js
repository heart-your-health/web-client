import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

let _store

export function configureStore(initialState) {
  _store = createStore(reducers, initialState, compose(
    applyMiddleware(
      thunkMiddleware,
    ),
    //for redux dev tools. Install chrome extension to use
    window.devToolsExtension ? window.devToolsExtension({name: 'fdx-core'}) : f => f
  ))
}

//configure store with initial state
configureStore()

export default _store