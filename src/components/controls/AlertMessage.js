import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  filledSuccess: {
    backgroundColor: "#274e6d",
    color: '#f5f6fa'
  },
  icon:{
    color: 'white'
  }
}));

const AlertMessage = ({message, open, setOpen }) =>{
  const classes = useStyles();
  const vertical= 'bottom';
  const horizontal= 'right';  
    return(
        <Snackbar
        anchorOrigin={{vertical, horizontal  }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} variant="filled" classes={{root:classes.icon,  filledSuccess: classes.filledSuccess}}>
         {message}
        </Alert>
      </Snackbar>
    )
}

export default AlertMessage;