import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createIncome } from '../../actions/incomes';

const Form = ({ currentId, setCurrentId }) => {
  const [incomeData, setIncomeData] = useState({ creditor_name, amount });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setIncomeData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setIncomeData({ creditor_name, amount });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch(createIncome(incomeData));
      clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Income</Typography>
        <TextField name="creditor_name" variant="outlined" label="Creator" fullWidth value={incomeData.creditor_name} onChange={(e) => setIncomeData({ ...incomeData, creditor_name: e.target.value })} />
        <TextField name="amount" variant="outlined" label="amount" fullWidth value={incomeData.amount} onChange={(e) => setIncomeData({ ...incomeData, amount: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
