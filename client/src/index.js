import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient();

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
