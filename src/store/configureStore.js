import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export const middlewareList = [ReduxThunk];

import rootReducer from './reducers';

export default createStore(rootReducer, {}, applyMiddleware(...middlewareList));;