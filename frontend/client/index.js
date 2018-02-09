/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'

import routes from '../routes'
import { sampleReducer } from '../flux/reducers'
import {createNetworkInterface} from "apollo-client/index";


// By default, this client will send queries to the
//  `/graphql` endpoint on the same host
const client = new ApolloClient({
    ssrMode: true,
    networkInterface: createNetworkInterface({
        uri: 'http://127.0.0.1:8000/graphql',
        credentials: 'same-origin',
    }),
})

const store = createStore(
  combineReducers({
    sampleReducer,
    apollo: client.reducer(),
    routing: routerReducer,
  }),
  window.__INITIAL_STATE__,
  compose(
    applyMiddleware(client.middleware()),
  )
)
const history = syncHistoryWithStore(browserHistory, store)


const App = () => (
  <ApolloProvider client={client} store={store}>
    <Router history={history} routes={routes} />
  </ApolloProvider>
)

// TODO: use a constant, reference in renderHtmlPage
const target = document.getElementById('react-container')
ReactDOM.render(<App />, target)
