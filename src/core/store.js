import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './sagas/saga';

// create saga
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

// run saga
sagaMiddleware.run(rootSaga);

export default store;