import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {rootReducer} from './redux/rootReducer'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const rootElement = document.getElementById("root");
const store= createStore(rootReducer)

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Provider store={store}>
    <App />
    </Provider>, rootElement);
} else {
  ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, rootElement);
}

