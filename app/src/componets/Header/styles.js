import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appHeader: {
    marginLeft: drawerWidth,
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    color: '#90A0B7',
    flexGrow: 1,
  },
  input: {
    marginBottom: '20px',
  },
  badge: {
    color: '#0275D8',
  },
  exitApp: {
    color: '#0275D8',
    marginLeft: '20px',
  },

  fixedHeight: {
    height: 240,
  },
  pageTitle: {
    color: '#000',
    fontWeight: '500',
    fontSize: '18px',
  },
  navOptions: {
    width: 'auto',
    border: '1px solid white',
    height: '40px',
    marginLeft: '20px',
    borderRadius: '5px',
    background: '#eceef8',
    color: 'black',
  },
}));
