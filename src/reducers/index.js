import { combineReducers } from 'redux';
import form from './form';
import order from './order';
import step from './step';

const rootReducer = combineReducers({ form, order, step }); 

export default rootReducer;
