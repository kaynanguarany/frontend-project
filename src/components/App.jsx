import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';
import Home from './Home';
import Board from './auth/Board';

const App = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
  const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(reduxThunk))
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/board' component={Board} />
      </BrowserRouter>
    </Provider>
  )
}

export default App; 