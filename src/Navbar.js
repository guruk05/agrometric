import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '0 px',
    display: 'block',

  },

  title: {
    flexGrow: 1,
    textAlign: 'center',
    color:"#196f3d"
  },
  appbar: {
    background: "white",
    color: "black",

  }
}));


export default function Navbar() {            //Navbar

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          <Typography  className={classes.title} >
            <b> Agrometric</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
