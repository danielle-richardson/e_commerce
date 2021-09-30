import { makeStyles } from '@material-ui/core/styles';

// for material-ui we call a function with a callback function inside is an instant return. Wrap the instant return in () then return an object. Write styles inside object 
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8),
  },
  root: {
    flexGrow: 1,
  },
}));