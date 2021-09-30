import { makeStyles } from '@material-ui/core/styles';

// for material-ui we call a function with a callback function inside is an instant return. Wrap the instant return in () then return an object. Write styles inside object 
export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));