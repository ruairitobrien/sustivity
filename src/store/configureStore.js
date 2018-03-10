import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas'

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();
  const reduxRouterMiddleware = routerMiddleware(history);

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
    reduxRouterMiddleware)
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );
  sagaMiddleware.run(rootSaga)
  return store;
}
