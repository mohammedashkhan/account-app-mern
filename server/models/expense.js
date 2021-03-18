import mongoose from 'mongoose';

const expensesSchema = mongoose.Schema({
    name: String,
    amount: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Expenses = mongoose.model('Expensess', expensesSchema);

export default Expenses;