import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Bidderdashboard from './dashboard';
import Winninghistory from './winninghistory';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },  
  appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },

}));

function Bidderhome(){
   
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return(

<div className={classes.root}>
<Bidderdashboard />
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
       <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Winninghistory />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            
            </Grid>
        </Container> 
      </main>
      </div>
    )
}

export default Bidderhome;