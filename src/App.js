import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
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
    <ApolloProvider client={client}>
      <Container maxWidth={'sm'}>
        <Typography variant={'h3'} className={classes.title}>GraphQL Github Client</Typography>
        <SearchBar />
        <RepositoryList />
      </Container>
    </ApolloProvider>
  );
};

export default App;
