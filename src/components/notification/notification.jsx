import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars({open, setOpen, type}) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical: 'top', horizontal: 'right'}} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}