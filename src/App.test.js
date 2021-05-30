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
// but from __mocks__/moxios-index.js 
import { getTodo as mockGetTodo } from './actions'

const setup = (state = {}) => {
  // TODO: apply state 
  const wrapper = mount(<App />);
  // add value to input box 
  const inputBox = findByTestAttr(wrapper, 'input-form');
  inputBox.simulate('change', { target: { value: 'train' } });
  // simulate click on submit button      
  const submitButton = findByTestAttr(wrapper, 'button-form');
  submitButton.simulate('click', { preventDefault() { } });
  return wrapper;
}

describe('no words in the list', () => {
  test('testList has length of ONE', () => {
    let wrapper = setup();
    const testList = findByTestAttr(wrapper, 'todo-item');
    expect(testList).toHaveLength(1);
  });
});

describe('ONE word on the list', () => {
  test('testList has length of TWO', () => {
    let wrapper = setup();
    // add value to input box 
    const inputBox = findByTestAttr(wrapper, 'input-form');
    inputBox.simulate('change', { target: { value: 'train' } });
    // simulate click on submit button      
    const submitButton = findByTestAttr(wrapper, 'button-form');
    submitButton.simulate('click', { preventDefault() { } });

    // So now the list has two elements, one that added on the setup() 
    // method and the other that added here.
    const testList = findByTestAttr(wrapper, 'todo-item');
    expect(testList).toHaveLength(2);
  });
});