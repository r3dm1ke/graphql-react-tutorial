import React from 'react';
import {Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  noRepoNote: {
    marginTop: '1rem',
    textAlign: 'center',
  }
});

const RepositoryList = ({repositories}) => {
  const classes = useStyles();

  return (
    <Typography
      variant={'overline'}
      className={classes.noRepoNote}
      component={'div'}
    >
      No repositories yet.
    </Typography>
  );
};

export default RepositoryList;
