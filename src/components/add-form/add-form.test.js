// import { shallow } from 'enzyme';
// import React from 'react';
// import { findByTestAttr } from '../../../test/testUtils';
// import AddForm from './add-form';

// const setup = () => shallow(<AddForm />);

// describe('render without errors', () => {
//   test('renders component without error', () => {
//     const wrapper = setup();
//     const AddForm = findByTestAttr(wrapper, 'component-form');
//     expect(AddForm.length).toBe(1);
//   });
//   test('render input without error', () => {
//     const wrapper = setup();
//     const input = findByTestAttr(wrapper, 'input-form');
//     expect(input.exists()).toBeTruthy();
//   });
//   test('render button without error', () => {
//     const wrapper = setup();
//     const button = findByTestAttr(wrapper, 'button-form');
//     expect(button.exists()).toBe(true);
//   });
// });

// describe.skip('state controlled input field', () => {
//   test('state updates with value of input box upon change', () => {
//     const mockSetTodo = jest.fn();
//     React.useState = jest.fn(() => ['', mockSetTodo]);

//     const wrapper = setup();
//     const input = findByTestAttr(wrapper, 'input-form');

//     const mockEvent = {target: {value: 'New Todo'}};
//     input.simulate('change', mockEvent);

//     expect(mockSetTodo).toBeCalledWith('New Todo')
//   })
// })

import { mount } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../../test/testUtils';
import App from '../../App';

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
    const testList = findByTestAttr(wrapper, 'test-list');
    expect(testList).toHaveLength(1);
  });
});