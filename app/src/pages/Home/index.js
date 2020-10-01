import React, { useEffect, useState } from 'react';
import Header from '../../componets/Header';
import MainContainer from '../../componets/MainContainer';
import TicketView from '../../componets/TicketView';
import QueueBtns from '../../componets/QueueBtns';

const Home = () => {
  const [genereateTicket, setGenereateTicket] = useState();

  useEffect(() => {}, [genereateTicket, setGenereateTicket]);
  return (
    <>
      <Header />
      <MainContainer title={'Home'}>
        <QueueBtns setGenereateTicket={setGenereateTicket} />
        <TicketView generatedTicket={genereateTicket} />
      </MainContainer>
      {/*  */}
    </>
  );
};

export default Home;
