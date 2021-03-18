import { combineReducers } from 'redux';

import incomes from './incomes';
import expenses from './expenses';

export const reducers = combineReducers({ incomes,expenses });
