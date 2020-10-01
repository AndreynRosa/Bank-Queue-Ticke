import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '100px',
  },
  paperTitle: {
    marginBottom: '1%',
    padding: '5px',
    textAlign: 'center',
  },
  paperBody: {
    minHeight: '750px',
    paddingTop: '20%',
  },
}));
