import { addTodoReducer } from './addTodo.reducer';
import { ADD_TODO } from '../actions';

test('when previous state is undefined, return []', () => {
  const reducer = addTodoReducer(undefined, ADD_TODO);
  expect(reducer).toHaveLength(0);
  // Equivalent to: 
  // expect(reducer.length).toBe(0);
});

test('return previous state when unknown action type', () => {
});

test('return `true` for action type CORRECT_GUESS', () => {
});
