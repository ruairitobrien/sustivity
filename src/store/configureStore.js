import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware, {END} from 'redux-saga';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();
  const reduxRouterMiddleware = routerMiddleware(history);

  const store = createStore(
    combineReducers({...rootReducer, router: routerReducer }),
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        createLogger(),
        reduxRouterMiddleware
      )
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
