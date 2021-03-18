export const getExpenses = () => async (dispatch) => {
    try {
      const { data } = await api.fetchExpenses();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createExpense = (income) => async (dispatch) => {
    try {
      const { data } = await api.createExpense(createExpense);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  