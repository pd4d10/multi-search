import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Container from './container'
import reducers from './reducers'

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger())
}

const store = applyMiddleware(...middlewares)(createStore)(reducers)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Container />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#content')
)
