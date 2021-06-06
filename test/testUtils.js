import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/store/reducers/index';

export const storeFactory = (initialState) => createStore(rootReducer, initialState);

export const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

// export const checkProps = (component, confirmingPropTypes) => {
//   const propError = checkPropTypes(
//     component.propTypes,
//     confirmingPropTypes,
//     'prop',
//     component.name);

//     expect(propError).toBeUndefined();
// }

export const checkProps = (component, confirmingPropTypes) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingPropTypes,
        'prop',
        component.name);

    expect(propError).toBeUndefined();
}