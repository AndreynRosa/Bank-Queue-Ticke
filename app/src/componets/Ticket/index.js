import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { formaterNumberTicket } from '../../utils/ticketUtils';

import { useStyles } from './styles';

const Ticket = ({ number, type }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.number}>
            {formaterNumberTicket(number, type)}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Ticket;
