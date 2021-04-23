import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from '../../../../test/testUtils';
import ToDo from './todo';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = () => shallow(<ToDo />);

test('renders todo without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-todo');
  expect(app.exists()).toBeTruthy();
});