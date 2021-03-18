import mongoose from 'mongoose';

const incomeSchema = mongoose.Schema({
    name: String,
    amount: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Incomes = mongoose.model('Incomes', incomeSchema);

export default Incomes;