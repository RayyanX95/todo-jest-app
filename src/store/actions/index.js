import axios from 'axios';

const ADD_TODO = 'ADD_TODO';

export const getTodo = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>  res.data )
}

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});