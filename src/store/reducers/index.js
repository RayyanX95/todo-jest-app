import { combineReducers } from 'redux';

import addTodoReducer from './addTodo.reducer';

function _add () {
  return {};
}

const rootReducer = combineReducers({
  _add,
});

export default rootReducer;