import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import routes from './routes';

import {Router, browserHistory} from 'react-router';
//browserHistory is an object tells react router how to interpret changes to the url, it tells it to update after a change in protocol
//hashHistory asks react router to respond to changes in url after the #
//memoryHistory doesnot track url at all. Look it up


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
