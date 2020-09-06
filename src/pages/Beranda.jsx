import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 500,
  },
  image: {
    width: 200,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function App() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" style={{ minHeight: '100vh' }}>
        <Paper className={classes.paper}>
          <Grid alignItems="center" container justify="center" >
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="data:image/jpeg;base64,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" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm>
              <Grid container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    <strong>Biodata</strong>
                  </Typography>
                  <Typography  >
                    Abdul Rahim Saleh
                            </Typography>
                  <Typography>
                    Maros, 10 Mei 1999
                            </Typography>
                  <Typography >
                    Mahasiswa
                            </Typography>
                  <Typography>
                    <span>Instagram : @abd.rahim.s</span>
                  </Typography>
                </Grid>

              </Grid>

            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}


export default App;