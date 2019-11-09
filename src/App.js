import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import FunctionButton from './components/functionButton';
import Timer from './components/timer';

const useStyles = makeStyles((theme) => ({
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
    },
}));

const App = () => {
    const classes = useStyles();
    const [timeLeft, setTimeLeft] = useState(1500);

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Paper className={classes.paper} />
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Timer timeLeft={timeLeft} />
                        <FunctionButton timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
