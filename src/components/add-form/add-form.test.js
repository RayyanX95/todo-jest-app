import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from '../../../test/testUtils';
import AddForm from './add-form';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = () => shallow(<AddForm />);

test('renders without error', () => {
  const wrapper = setup();
  const AddForm = findByTestAttr(wrapper, 'component-add-form');
  expect(AddForm.length).toBe(1);
});