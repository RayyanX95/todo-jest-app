import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from '../../../test/testUtils';
import ToDoList from './todo-list';


Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = () => shallow(<ToDoList />);

test('renders todo list without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-todo-list');
  expect(app.exists()).toBeTruthy();
});
