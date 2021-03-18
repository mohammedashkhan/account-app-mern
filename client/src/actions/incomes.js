import { FETCH_ALL, CREATE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getIncomes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchIncomes();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createIncome = (income) => async (dispatch) => {
  try {
    const { data } = await api.createIncome(income);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
