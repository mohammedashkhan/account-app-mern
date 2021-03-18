import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (expenses = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...expenses, action.payload];
    default:
      return expenses;
  }
};

