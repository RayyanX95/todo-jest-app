import { combineReducers } from 'redux';

import addTodoReducer from './addTodo.reducer';

const rootReducer = combineReducers({
  addTodoReducer,
});

export default rootReducer;