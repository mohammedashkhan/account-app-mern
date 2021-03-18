import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (incomes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...incomes, action.payload];
    default:
      return incomes;
  }
};

