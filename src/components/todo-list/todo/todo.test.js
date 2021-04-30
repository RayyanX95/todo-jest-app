import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../../test/testUtils';
import ToDo from './todo';

const setup = (props = {}) => shallow(<ToDo {...props} />);

test('renders todo without error', () => {
  const wrapper = setup();
  const todoComponent = findByTestAttr(wrapper, 'component-todo');
  expect(todoComponent.exists()).toBeTruthy();
});

test('check change upon change', () => {
  const wrapper = setup();
  const todoComponent = findByTestAttr(wrapper, 'component-todo');
  
  todoComponent.simulate('click');
  const labelText = findByTestAttr(wrapper, 'label-text');
  console.log("__> : ", labelText.text())

  expect(labelText.text().length).not.toBe(0);
})