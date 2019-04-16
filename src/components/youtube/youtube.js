import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import YouTube from 'react-youtube';

const styles=() => ({
    root:{
        flexGrow: 1,
        direction:'row',
        marginTop: 10,
        marginLeft: 'auto',
        alignItems: "stretch",

    },

    paper2: {
        alignItems: 'center',
        marginTop: 15,
        marginLeft:10,
        marginRight: 10
    },
});

const opts = {
    height: 263,
    width: 640,
    playerVars: {
        autoplay: 0
    }
};

function video(props, youId){
    const {classes} = props;

    return(
        <div className={classes.root}>
            <YouTube
                className={classes.paper2}
                videoId={{youId}}
                opts={opts}
            />

        </div>
    );
}
export default withStyles(styles)(video);