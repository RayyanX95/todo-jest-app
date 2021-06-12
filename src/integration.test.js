import { storeFactory } from '../test/testUtils';
import { addTodoFromServer } from './store/actions';

const INITIAL_STATE = {
  addTodoReducer: {
    todoList: [],
    isDisabled: false,
  }
}

describe('addTodoFromServer action dispatch', () => {
  // use wrong API to simulate it
  describe('no TODO in the list', () => {
    let store;
    beforeEach(() => {
      store = storeFactory(INITIAL_STATE);
    })
    test('make the button disabled', () => {
      store.dispatch(addTodoFromServer());
      const expectedState = {
        todoList: [],
        isDisabled: true,
      }

      const newState = store.getState();
      console.log("--------newState: ", newState);
      expect(newState.addTodoReducer).toEqual(expectedState)
    });
  });
  // use the correct API to get todo from server
  describe('some TODO in the list', () => {
    test('make the button enabled', () => {

    });
  });
});