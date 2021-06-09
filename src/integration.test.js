import { storeFactory } from '../test/testUtils';
import { addTodoFromServer } from './store/actions';

describe('addTodoFromServer action dispatch', () => {
  // use wrong API to simulate it
  describe('no TODO in the list', () => {
    test('make the button disabled', () => {

    });
  });
  // use the correct API to get todo from server
  describe('some TODO in the list', () => {
    test('make the button enabled', () => {

    });
  });
});