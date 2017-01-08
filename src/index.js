import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import reducers from './reducers'

// Custom css for Training Exercises
import 'react-training-lib/dist/fonts.css';
import 'react-training-lib/dist/mdl-layout--overrides.css';

// CSS Theme
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={ browserHistory } routes={routes} />
    </Provider>,
  document.getElementById('root')
);
