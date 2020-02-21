import {useQuery} from "@apollo/react-hooks";
import React from 'react';
import {Typography, makeStyles, CircularProgress} from "@material-ui/core";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS} from "./queries";

const useStyles = makeStyles({
  note: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem'
  }
});

const RepositoryList = ({searchTerm}) => {
  const classes = useStyles();
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const {data, loading, error} = useQuery(SEARCH_FOR_REPOS,
    {variables: {search_term: debouncedSearchTerm}}
    );

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
        color={'error'}
      >
        {error}
      </Typography>
    )
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
      >
        There are no such repositories!
      </Typography>
    )
  }

  return (
    <Typography
      variant={'overline'}
      className={classes.note}
      component={'div'}
    >
      Some repositories!
    </Typography>
  );
};

export default RepositoryList;
