import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import  Youtube from '../youtube/youtube';
import FormContainer from '../FormContainer'


const styles= {
    root: {
        flexGrow: 1,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
    },

    paper: {
        padding:20,
        alignItems: 'fixed',
        marginTop: 15,
    },
};


class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div style={{padding: 8}} className={this.props.classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                        <Paper className={this.props.classes.paper}>
                                <Typography variant="h4" component="h3">
                                    Primeira Etapa
                                </Typography>
                                <Typography component="p" style={{marginTop: 40, textAlign: 'left'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet
                                    ullamcorper lorem a ullamcorper.
                                    Integer bibendum dui tortor, vel congue nunc pharetra non. nunc pharetra non.vel
                                    congue nunc pharetra non. nunc pharetra non.
                                </Typography>
                        <br/><br/><br/><br/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} style={{marginTop: 15}}>
                        <Youtube ytId='gG4VH86aFGo'/>
                    </Grid>
                </Grid>
                <FormContainer/>
            </div>
        );
    }
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);
