import React from 'react';
import {Typography, Container, makeStyles} from "@material-ui/core";
import RepositoryList from "./RepositoryList";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center'
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={'sm'}>
      <Typography variant={'h3'} className={classes.title}>GraphQL Github Client</Typography>
      <SearchBar/>
      <RepositoryList/>
    </Container>
  );
};

export default App;
