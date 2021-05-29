import { shallow } from 'enzyme';
import moxios from 'moxios';

import {getTodo} from './moxios-test';


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