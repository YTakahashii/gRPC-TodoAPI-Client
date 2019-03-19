import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from 'src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
