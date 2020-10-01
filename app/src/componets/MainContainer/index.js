import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles';

const MainContainer = ({ children, title }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <>
            <Paper className={classes.paperTitle}>
              <Typography variant="h3">{title}</Typography>
            </Paper>
            <Paper className={classes.paperBody}>
              {children}
            </Paper>
          </>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default MainContainer;
