import { Button } from '@material-ui/core';
import React from 'react';
import { generateTicket } from '../../service/TicketService';

import { useStyles } from './styles';

const QueueBtns = ({setGenereateTicket}) => {
  const classes = useStyles();

  async function generateNormalTicket() {
    const resp = await generateTicket('NORMAL');
    setGenereateTicket(resp.data);
  }

  async function generatePriorityTicket() {
    const resp = await generateTicket('PRIORITY');
    setGenereateTicket(resp.data);
  }

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={() => generateNormalTicket()}
      >
        Senha Prioritária
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={() => {
          generatePriorityTicket();
        }}
      >
        Senha Normal
      </Button>
    </div>
  );
};

export default QueueBtns;
