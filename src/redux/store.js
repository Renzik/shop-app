import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducers/root.reducer';

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
