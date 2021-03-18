import axios from 'axios';

const url = 'http://localhost:5000/finance';

export const fetchIncomes = () => axios.get(`${url}/incomes`);
export const createIncome = (newIncome) => axios.post(`${url}/income`, newIncome);

export const fetchExpenses = () => axios.get(`${url}/expenses`);
export const createExpense = (newExpense) => axios.post(`${url}/expense`, newExpense);

