import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Box, Fab, } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
  }
});

export default function MyDrawer(props) {
  const classes = useStyles();

  const handleOpen = () => {
    props.toggleDrawer(props.anchor, true)
  }
  const handleClose = () => {
    console.log('open')
    props.toggleDrawer(props.anchor, false);
  }

  const content = (anchor) => (
    <div
      className={classes.root}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      {props.drawer}
    </div>
  );
  return (
    <div>
      <SwipeableDrawer
        anchor={props.anchor}
        open={props.state[props.anchor]}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        {content(props.anchor)}
      </SwipeableDrawer>
    </div>
  );
}