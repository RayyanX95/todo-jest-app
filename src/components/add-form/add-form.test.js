import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../../../test/testUtils';
import AddForm from './add-form';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<AddForm />);

describe('render without errors', () => {
  test('renders component without error', () => {
    const wrapper = setup();
    const AddForm = findByTestAttr(wrapper, 'component-form');
    expect(AddForm.length).toBe(1);
  });
  test('render title without error', () => {
    const wrapper = setup();
    const title = findByTestAttr(wrapper, 'title-form');
    expect(title.exists()).toBe(true);
  });
  test('render input without error', () => {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'input-form');
    expect(input.exists()).toBeTruthy();
  });
  test('render button without error', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-form');
    expect(button.exists()).toBe(true);
  });
})