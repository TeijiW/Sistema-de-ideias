import React from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import  Youtube from '../youtube/youtube';

const styles=() => ({
    root:{
        flexGrow: 1,
        marginTop: 'auto',
        marginLeft: 'auto',
        alignItems: "stretch",
        justifyContent: "center",
    },

    paper: {
        padding:20,
        alignItems: 'center',
        marginTop: 15,
    },
    paper2: {
        alignItems: 'center',
        marginTop: 15,
        marginLeft:10,
        marginRight: 10
    },
});


function Body(props){
    const {classes} = props;

    return(
        <div style={{ padding: 9}} className={classes.root}>
            <Grid container spacing={16}>
                <Grid item xs ={6}>
                    <Paper className={classes.paper}>
                        <Typography>
                            <Typography variant="h4"component="h3" >
                                Primeira etapa
                            </Typography>
                            <Typography  component="p" style={{marginTop:40, textAlign: 'left'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet ullamcorper lorem a ullamcorper.
                                Integer bibendum dui tortor, vel congue nunc pharetra non. nunc pharetra non.vel congue nunc pharetra non. nunc pharetra non.
                            </Typography>
                            <Button variant="contained" color="primary" style={{marginTop:50, textAlign: 'left', width:'100'}}>
                                começar
                            </Button>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs ={6} >
                    <Youtube youId ='yRYFKcMa_Ek'/>
                </Grid>
            </Grid>

            <Grid container spacing={16}>
                <Grid item xs>
                </Grid>
                <Grid item xs={8} >
                   <h1> teste teste testeteste teste teste teste teste teste</h1>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </div>
    );

}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);
