import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const incomes = useSelector((state) => state.incomes);
  const classes = useStyles();

  return (
    !incomes.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {incomes.map((income) => (
          <Grid key={income._id} item xs={12} sm={6} md={6}>
            <Post post={income} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
