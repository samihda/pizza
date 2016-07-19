/* eslint-disable import/default */

import rootReducer from '../reducers';
import { createStore } from 'redux';
import { expect } from 'chai';

describe('Store', () => {
  it('should contain the form state of the app', () => {
    const store = createStore(rootReducer);
    const state = store.getState();
    expect(state).to.have.ownProperty('form');
  });

  it('should contain the order state of the app', () => {
    const store = createStore(rootReducer);
    const state = store.getState();
    expect(state).to.have.ownProperty('order');
  });

  it('should contain the step state of the app', () => {
    const store = createStore(rootReducer);
    const state = store.getState();
    expect(state).to.have.ownProperty('step');
  });
});
