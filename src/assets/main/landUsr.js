import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Title from '../../component/title';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      elevation: 9,
    },
    media: {
        height: 140,
    },
  }));
  
  

export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
                <Card className={classes.paper}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://source.unsplash.com/oB0xbLwcaMw"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Title>
                          Selamat Datang, User
                        </Title>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Mulai konsultasi dengan Bidan atau Set reminder checkup!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Title>Jumlah Kunjungan</Title>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }