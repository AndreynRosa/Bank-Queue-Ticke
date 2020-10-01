import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../componets/Header';
import MainContainer from '../../componets/MainContainer';
import TicketHml from '../../componets/Ticket';

import { findAllByStatus, reset } from '../../service/TicketService';

import { useStyles } from './styles';

const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const [calledTickets, setCalledTickets] = useState([]);

  const classes = useStyles();
  const history = useHistory();

  async function restTicketNumbers() {
    const resp = await reset();
    if (resp.status === 200) {
      alert('A numeração das senhas foi reiniciada. Vamos lhe redirecionar poara pagina home');
    }
  }
  const loadTickets = useCallback(async () => {
    const respTickets = await findAllByStatus('WAITING');
    const respCalledTickets = await findAllByStatus('ATTENDED');
    setCalledTickets(respCalledTickets.data);
    setTickets(respTickets.data);
  }, [setCalledTickets, setTickets]);

  useEffect(() => {
    loadTickets();

    return;
  }, [loadTickets]);

  return (
    <>
      <Header />
      <MainContainer title={'Senhas'}>
        <div className={classes.btnBox}>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={async () => {
              restTicketNumbers();
              history.push('/');
            }}
          >
            Resetar numeração
          </Button>
        </div>
        <Grid container className={classes.root}>
          <Grid item xs={6}>
            <Paper className={classes.ticketsArea}>
              <Typography variant="h4" align="center">
                Senhas Chamadas
              </Typography>

              {calledTickets.map(ticket => {
                return <TicketHml key={ticket.id} {...ticket} />;
              })}
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper style={{ margin: '0 5px ' }}>
              <Typography variant="h4" align="center">
                Proximas Senhas
              </Typography>
              {tickets.map(ticket => {
                return <TicketHml key={ticket.id} {...ticket} />;
              })}
            </Paper>
          </Grid>
        </Grid>
      </MainContainer>
    </>
  );
};

export default Ticket;
