import express from 'express';

import { getIncomes, createIncome, getExpenses, createExpense } from '../controllers/finance.js';

const router = express.Router();

router.get('/incomes', getIncomes);
router.post('/income', createIncome);

router.get('/expenses', getExpenses);
router.post('/expense', createExpense);

export default router;