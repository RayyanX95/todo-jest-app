import { mount } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

// Activate global mock to make sure getTodo does not make network calls

// if anywhere in the course of your tests you see this action module imported
// I want you import from this __mocks__ module instead 
// We setup __mocks__ module so it will do everything as usual except 
// for get secret word 
jest.mock('./actions');

// Since we have done this mock it is going to import this not actions/index.js
// but from __mocks__/index.js 
import { getTodo as mockGetTodo } from './actions'

const setup = (state = {}) => {
  const wrapper = mount(<App />);
  return wrapper;
}

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
})

describe('- ge a todo', () => {
  beforeEach(() => {
    // clear the mock calls from the previous tests
    mockGetTodo.mockClear();
  })
  test('getTodo on app mount', () => {
    const wrapper = setup();
    expect(mockGetTodo).toHaveBeenCalledTimes(1);
  });
  test('getTodo does NOT run on update', () => {
    const wrapper = setup();
    mockGetTodo.mockClear();

    wrapper.setProps();
    expect(mockGetTodo).toHaveBeenCalledTimes(0);
  });
});