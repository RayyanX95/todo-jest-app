import { ADD_TODO, TOGGLE_BUTTON } from '../actions';

const INITIAL_STATE = {
  todoList: [],
  isDisabled: false,
}

const addTodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    case TOGGLE_BUTTON:
      return {
        ...state,
        isDisabled: !state.isDisabled
      }

    default:
      return state
  }
}

export default addTodoReducer ;