import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import reducers from './reducers'

const history = createBrowserHistory()

export default function configureStore(initialState) {
    return createStore(reducers, initialState, applyMiddleware(logger, thunk, routerMiddleware(history)))
}
