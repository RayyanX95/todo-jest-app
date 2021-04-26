import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr, checkProps } from '../../../test/testUtils';
import ToDoList from './todo-list';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  todoList: []
}

const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
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

describe('if there is no todo in the list', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test('renders without error', () => {
    const app = findByTestAttr(wrapper, 'component-todo-list');
    expect(app.exists()).toBeTruthy();
  });
  test('show "No tasks message" when list is empty', () => {
    const emptyMsg = findByTestAttr(wrapper, 'empty-message');
    expect(emptyMsg.exists()).toBeTruthy();
  });
});

describe('if there are todo items', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      todoList: [
        { value: "value-test", id: 'test-id-1' },
        { value: "value-test", id: 'test-id-2' },
        { value: "value-test", id: 'test-id-3' },
      ]
    });
  });
  test('renders without error', () => {
    const app = findByTestAttr(wrapper, 'component-todo-list');
    expect(app.exists()).toBeTruthy();
  });
  test('show list element when list is not empty', () => {
    const todoItem = findByTestAttr(wrapper, 'todo-item');
    expect(todoItem.length).toBe(3);
  })
})

test('renders todo list at start has length of "0"', () => {
  const wrapper = setup();
  const todoList = findByTestAttr(wrapper, 'todo-list');
  expect(todoList.children()).toHaveLength(0);
});

test('Throw error when wrong prop types', () => {
  // const expectedProps = {todoList: []};
  // const propError = checkPropTypes(ToDoList.propTypes, { todoList: [] }, 'prop', ToDoList.name);
  // expect(propError).toBeUndefined();

  checkProps(ToDoList, defaultProps);
});