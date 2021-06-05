import { shallow } from 'enzyme';
import moxios from 'moxios';

import { getTodo, addTodo } from './index';


describe('test moxios ', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('get todo data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        }
      });
    });

    return getTodo()
      .then(todo => {
        expect(todo.id).toBe(1);
      })
  });
})

describe('add todo', () => {
  test('test add todo action', () => {
    const todo = {
      value: "first todo",
      id: "todo-id-1001"
    }
    const action = addTodo(todo);
    const actionMatch = {
      type: 'ADD_TODO',
      payload: {
        value: "first todo",
        id: "todo-id-1001"
      }
    }
    expect(action).toStrictEqual(actionMatch)
  });
})