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
  todoComponent.props().onClick();
  const labelText = findByTestAttr(wrapper, 'label-text');

  expect(mockSetLabelText).toHaveBeenCalledWith('clicked!');
})