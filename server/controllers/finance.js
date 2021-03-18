import express from 'express';
import mongoose from 'mongoose';

import Incomes from '../models/income.js';
import Expenses from '../models/expense.js';

const router = express.Router();

export const getIncomes = async (req, res) => { 
    try {
        const Incomes = await Incomes.find();
                
        res.status(200).json(Incomes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createIncome = async (req, res) => {
    const { creditor_name, Amount } = req.body;

    const Income = new Incomes({ creditor_name, Amount })

    try {
        await Income.save();

        res.status(201).json(Income );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getExpenses = async (req, res) => { 
    try {
        const Expenses = await Expenses.find();
                
        res.status(200).json(Expenses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createExpense = async (req, res) => {
    const { name, Amount } = req.body;

    const Expense = new Expenses({ name, Amount })

    try {
        await Expense.save();

        res.status(201).json(Expense);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;