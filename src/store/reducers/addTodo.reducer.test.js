import addTodoReducer from './addTodo.reducer';
import { ADD_TODO } from '../actions';

test('when previous state is undefined, return []', () => {
  const reducer = addTodoReducer(undefined, {});
  expect(reducer.todoList).toHaveLength(0);
  // Equivalent to: 
  // expect(reducer.length).toBe(0);
});

test('return previous state when unknown action type', () => {
  const state = {
    todoList: [
      {
        value: "first todo",
        id: "todo-id-1001"
      },
      {
        value: "second todo",
        id: "todo-id-1002"
      },
    ]
  }
  const reducer = addTodoReducer(state, { type: 'unknown' });
  expect(reducer.todoList.length).toBe(2);
});

test('return todoList of one element for action type ADD_TODO', () => {
  const action = {
    type: ADD_TODO,
    payload: {
      value: "first todo",
      id: "todo-id-1001"
    },
  }
  const reducer = addTodoReducer({todoList: []}, action);

  expect(reducer.todoList.length).toBe(1);
});
