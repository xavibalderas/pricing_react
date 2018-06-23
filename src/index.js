import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cjfm499pw3ou801560kjiro3e'

const client = new ApolloClient({
  uri: GRAPHCMS_API
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker();
