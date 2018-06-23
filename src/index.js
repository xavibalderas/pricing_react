import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const URI_API = process.env.REACT_APP_GRAPHCMS_API;

const client = new ApolloClient({
  uri: URI_API
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker();
