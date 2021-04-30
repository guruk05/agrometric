import React from "react";
import './Main.css';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Container } from '@material-ui/core';
import Carousel from "./Carousel";
import CancelIcon from '@material-ui/icons/Cancel';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: "5%",
  },
  margin: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#196f3d',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    margin: theme.spacing(1),
    backgroundColor: '#196f3d',
    borderRadius: '25px',
    color: '#fbfcfc',
    textTransform: "none",
  },
  typography: {
    padding: theme.spacing(2),
  },
  paper: {
    border: '2px solid #FFF',
    position: 'fixed',
    padding: '12px',
    outline: 'none',
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    borderColor: 'none',
    borderRadius: '10px',
  },

}));
function Main() {
 const classes = useStyles();
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Main">
      <Container>
        <p>
          New here?
        </p>
        <p>
          know how to use
        </p>
        <p>
          Cardamom Evaluator
        </p>
      </Container>
      <div>
        <Button variant="contained" className={classes.margin} onClick={handleOpen}>
          <b>How To Use</b>
        </Button>
        <Modal                                  //modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <div className={classes.paper}>

            <div style={{
              display: 'center', justifyContent: 'flex-end', position: 'absolute',
              top: '-5.8px',
              right: '-5.8px'
            }}>
              <CancelIcon onClick={handleClose} style={{
                float: 'right', fontSize: '20px'

              }} />
            </div>
            <Carousel />
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default Main;






