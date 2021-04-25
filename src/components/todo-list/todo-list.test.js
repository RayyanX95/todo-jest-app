import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../../../test/testUtils';
import ToDoList from './todo-list';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const initProps = {
  todoList: []
}

const setup = (props = {}) => {
  const setupProps = {
    ...initProps,
    ...props,
  }
  return shallow(<ToDoList {...setupProps} />)
};

test('renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-todo-list');
  expect(app.exists()).toBeTruthy();
});

test('render title without error', () => {
  const wrapper = setup();
  const title = findByTestAttr(wrapper, 'list-title');
  expect(title.text().length).not.toBe(0);
})

test('show "No tasks message" when list is empty', () => {
  const wrapper = setup();
  const emptyMsg = findByTestAttr(wrapper, 'empty-message');
  expect(emptyMsg.exists()).toBeTruthy();
});

test('show list element when list is not empty', () => {
  const wrapper = setup({ todoList: [{ value: "value-test", id: 'test-id' }] });
  const emptyMsg = findByTestAttr(wrapper, 'todo-list');
  expect(emptyMsg.exists()).toBeTruthy();
})

test('renders todo list at start has length of "0"', () => {
  const wrapper = setup();
  const todoList = findByTestAttr(wrapper, 'todo-list');
  expect(todoList.children()).toHaveLength(0);
});

// test('clicking on button adds new Todo', () => {
//   const buttonSetup = () => shallow(<AddForm />);
//   // find the button 
//   const addButton = findByTestAttr(buttonSetup(), 'button-form');
//   console.log(addButton.debug());
//   // simulate click event
//   addButton.simulate('click');
//   // find Todo list
//   const wrapper = setup();
//   const todoList = findByTestAttr(wrapper, 'todo-list');
//   // console.log(todoList.debug());

//   expect(todoList.children()).toHaveLength(1);
// })