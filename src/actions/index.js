import axios from 'axios';

export const getTodo = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>  res.data )
}
