import React from 'react';
import clsx from 'clsx';
import Dashboard from './sellerdashboard';
import ViewProducts from "./viewproducts";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    display: 'flex',
  },
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
    height: 540,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }
}));


     
function Products(){    
          const classes = useStyles();          
          const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return(
<div className={classes.root} id="box">
<Dashboard />
<main className={classes.content}>
<div className={classes.appBarSpacer} />
       <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <ViewProducts />
              </Paper>
            </Grid>
     {/*<Grid item xs={12}>
              <Paper className={classes.paper}>
              </Paper>
        </Grid> */}
          </Grid>
          <Box pt={4}>
          </Box>

</Container>
</main>
</div>
        );
    }

export default Products;