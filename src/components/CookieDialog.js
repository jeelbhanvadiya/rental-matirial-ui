import {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {AuthContext} from '../context/AuthContext';

export default function CoockieDialog({open, setOpen}) {
  const {onLogout} = useContext(AuthContext) 
  const HandelAgree = () =>{
    localStorage.setItem('rf_concent', true);
    handleClose();
  }

  const HandelDiaagree= () =>{
    localStorage.removeItem('rf_concent');
    onLogout();
    handleClose();
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick
        maxWidth="md"
      >
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
          This website uses cookies to improve your web experience. By using the site, you agree to the use of cookies. <a href="https://rent-finder.de/cookie" target="_blank" className="font-color">more</a>
          {/* This website uses cookies to give you the best possible experience on our website <a href="https://rent-finder.de/cookie" target="_blank" className="font-color">more</a> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={HandelDiaagree} color="primary">
            Disagree
          </Button> */}
          <Button onClick={HandelAgree} color="primary" variant="outlined">
            Accept and Close 
          </Button>
        </DialogActions>
      </Dialog>

  );
}
