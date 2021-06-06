import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';

import { findByTestAttr, storeFactory} from '../test/testUtils';
import App from './App';

const INITIAL_STATE = {
  todoList: [],
  isDisabled: false,
}

const setup = (initialState = INITIAL_STATE) => {
  // TODO: apply state 
  const store = storeFactory(initialState)
  const wrapper = mount(<Provider store={store}><App /></Provider>);
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