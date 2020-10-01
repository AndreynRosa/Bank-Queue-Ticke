import React, { useEffect, useState } from 'react';
import Header from '../../componets/Header';
import MainContainer from '../../componets/MainContainer';
import TicketView from '../../componets/TicketView';
import QueueBtns from '../../componets/QueueBtns';

const Home = () => {
  const [createdicket, setCreatedicket] = useState();

  useEffect(() => {}, [createdicket, setCreatedicket]);
  return (
    <>
      <Header />
      <MainContainer title={'Home'}>
        <QueueBtns setCreatedicket={setCreatedicket} />
        <TicketView createdicket={createdicket} />
      </MainContainer>
      {/*  */}
    </>
  );
};

export default Home;
