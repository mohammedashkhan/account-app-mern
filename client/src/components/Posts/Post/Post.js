import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Post = ({ income, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{income.name}</Typography>
        <Typography variant="body2">{moment(income.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(income._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{income.amount}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{income.message}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
