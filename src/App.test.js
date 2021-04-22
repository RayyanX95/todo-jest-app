import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from '../test/testUtils';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = () => shallow(<App />);

test('renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app.exists()).toBeTruthy();
});
