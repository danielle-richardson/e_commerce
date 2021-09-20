import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  home: {
    maxWidth: '100%',
    backgroundImage: 'https://cdn2.hubspot.net/hubfs/53/best-free-stock-photo-sites.jpg',
    backgroundPosition: 'center',
    display: 'flex',
    paddingTop: '60px',
    height: '80vh',
    overflow: 'auto',
  },
  container: {
    display: 'flex',
    position: 'absolute',
    top: '20%',
    left: '4%'
  },
 
}));