import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FunctionButton from './components/functionButton';
import Timer from './components/timer';
import { Container, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    marginTop: '5em',
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}>
            <Timer />
            <FunctionButton />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
