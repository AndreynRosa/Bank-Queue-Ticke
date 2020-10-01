import { Button, Paper, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { callNext, findAllByStatus } from '../../service/TicketService';
import { formaterNumberTicket } from '../../utils/ticketUtils';

import { useStyles } from './styles';

const TicketView = ({ createdicket }) => {
  const [nextTikect, setNextTikect] = useState();

  const loadTikecetsView = useCallback(async () => {
    const respCalledTickets = await findAllByStatus('ATTENDED');
    setNextTikect(respCalledTickets.data[respCalledTickets.data.length - 1]);
  }, [setNextTikect]);

  async function callNextTicket() {
    const resp = await callNext();
    if (resp && resp?.data) {
      setNextTikect(resp?.data);
    } else {
      alert('Não ha senahs criadas para serem cahadmas');
    }
  }
  const classes = useStyles();
  useEffect(() => {
    if (!nextTikect && !nextTikect?.id) {
      loadTikecetsView();
    }
  }, [createdicket, nextTikect, loadTikecetsView]);
  return (
    <div style={{ textAlign: 'center' }}>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h5" className={classes.ticketView}>
          Senha Gerada
        </Typography>
        <Typography variant="h3">
          {createdicket?.number
            ? formaterNumberTicket(createdicket?.number, createdicket.type)
            : 0}
        </Typography>
      </Paper>

      <Paper elevation={3} className={classes.root}>
        <Typography variant="h5" className={classes.ticketView}>
          Proxima Senha
        </Typography>

        <Typography variant="h3">
          {nextTikect
            ? formaterNumberTicket(nextTikect?.number, nextTikect?.type)
            : 0}
        </Typography>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          await callNextTicket();
        }}
        className={classes.btn}
      >
        {' '}
        Proxima Senha
      </Button>
    </div>
  );
};

export default TicketView;
