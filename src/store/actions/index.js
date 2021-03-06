import axios from 'axios';

export const ADD_TODO_FROM_SERVER = 'ADD_TODO_FROM_SERVER';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

export const addTodoFromServer = () => {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_BUTTON,
    })
  }

}

export const getTodo = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>  res.data )
}

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const toggleAddButton = () => ({
  type: TOGGLE_BUTTON,
})