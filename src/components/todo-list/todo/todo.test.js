import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../../../test/testUtils';
import ToDo from './todo';

const setup = (props = {}) => shallow(<ToDo {...props} />);

test('renders todo without error', () => {
  const wrapper = setup();
  const todoComponent = findByTestAttr(wrapper, 'component-todo');
  expect(todoComponent.exists()).toBeTruthy();
});

test('check change upon change', () => {
  const mockSetLabelText = jest.fn();
  const useStateMockValues = jest.fn(() => ['', mockSetLabelText]);
  React.useState = useStateMockValues
  const wrapper = setup();
  const todoComponent = findByTestAttr(wrapper, 'component-todo');

  // todoComponent.simulate('click');
  todoComponent.props().onClick({ value: 'click event value' });

  expect(mockSetLabelText).toHaveBeenCalledWith('click event value');
});

test('test basics mock functions ', () => {
  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  const mockCallback = jest.fn(x => x + 22);
  forEach([0, 3, 5], mockCallback);

  // The mock function is called three times
  // expect(mockCallback.mock.calls.length).toBe(3);

  // The first argument of the third call to the function was 5
  // expect(mockCallback.mock.calls[2][0]).toBe(5)

  //  return value of the second call to the function was 42
  expect(mockCallback.mock.results[1].value).toBe(25);
});
test('test return value of mock functions', () => {
  const filterTestFn  = jest.fn();
  console.log(filterTestFn ()); // undefined

  filterTestFn.mockReturnValueOnce(false).mockReturnValueOnce(true);

  const result  = [11,99].filter(num => filterTestFn (num));
  console.log("> ", result); // > [99]
})