import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';
// import rootReducer from '../../store/reducers';
import AddForm from './add-form';

const INITIAL_STATE = {
  todoList: [],
  isDisabled: false,
}

const setup = (initialState = INITIAL_STATE) => {
  const store = storeFactory(initialState);
  return mount(<Provider store={store} ><AddForm /></Provider>)
};

describe('render without errors', () => {
  test('renders component without error', () => {
    const wrapper = setup();
    const AddForm = findByTestAttr(wrapper, 'component-form');
    expect(AddForm.length).toBe(1);
  });
  test('render input without error', () => {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'input-form');
    expect(input.exists()).toBeTruthy();
  });
  test('render button without error', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-form');
    expect(button.exists()).toBe(true);
  });
});

describe.skip('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const mockSetTodo = jest.fn();
    React.useState = jest.fn(() => ['', mockSetTodo]);

    const wrapper = setup({});
    const input = findByTestAttr(wrapper, 'input-form');

    const mockEvent = { target: { value: 'New Todo' } };
    input.simulate('change', mockEvent);

    expect(mockSetTodo).toBeCalledWith('New Todo')
  })
})