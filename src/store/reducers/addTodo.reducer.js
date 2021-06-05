import { ADD_TODO } from '../actions';

const INITIAL_STATE = []

export const addTodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ADD_TODO:
    //   return {
    //     ...state,
    //     todoList: [...state.todoList, action.payload]
    //   }

    default:
      return state
  }
}