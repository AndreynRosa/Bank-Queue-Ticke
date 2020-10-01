import React from 'react';

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Container, ListItem
} from '@material-ui/core';

import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';

const Header = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
    <div className={classes.root}>
      <AppBar className={classes.appHeader}>
        <Toolbar className={classes.toolbar}>
          <ListItem
            className={classes.navOptions}
            button
            onClick={() => history.push('/')}
          >
            Home
          </ListItem>
          <ListItem
            className={classes.navOptions}
            button
            onClick={() => history.push('/senhas')}
          >
            Historico de senhas
          </ListItem>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </div>
    </div>

    </>
  );
};

export default Header;
