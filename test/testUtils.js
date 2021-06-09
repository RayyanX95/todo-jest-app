import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/store/reducers/index';
import { middlewareList } from '../src/store/configureStore';

export const storeFactory = (initialState) => createStore(rootReducer, initialState, applyMiddleware(...middlewareList));

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