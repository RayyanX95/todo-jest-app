import { addTodoReducer } from './addTodo.reducer';
import { ADD_TODO } from '../actions';

test('when previous state is undefined, return []', () => {
  const reducer = addTodoReducer(undefined, ADD_TODO);
  expect(reducer).toHaveLength(0);
  // Equivalent to: 
  // expect(reducer.length).toBe(0);
});

test('return previous state when unknown action type', () => {
  const todoList = [
    {
      value: "first todo",
      id: "todo-id-1001"
    },
    {
      value: "second todo",
      id: "todo-id-1002"
    },
  ]
  const reducer = addTodoReducer(todoList, {type: 'unknown'});
  expect(reducer.length).toBe(2);
});

test('return `true` for action type CORRECT_GUESS', () => {
});
