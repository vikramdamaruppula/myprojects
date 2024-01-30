import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({data}) {
  const [open, setOpen] = React.useState(false);
  // const rows=data
  console.log(data)
 const keys= Object.keys(data)

 
 console.log(keys)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" align="left" onClick={handleClickOpen}>
        Click for More
      </Button>
      <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
         {/* onClose={handleClose} */}
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          close
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <p> the details </p>

            {
              keys.map((eachKey)=>(
                <>
                <p> {eachKey}: {data[eachKey]} </p>

                </>
              ))
            }
            {/* <p> Name: {data.name}</p> 
            <p> gender: {data.gender}</p> 
            <p> profession : {data.profession}</p> */}
         
          </Typography>
          
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}


//  {data.map((item)=>{
//     <ul>
//     <li> name:{item.name}</li>
// </ul>
// })}