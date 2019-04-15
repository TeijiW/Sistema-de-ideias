import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import YouTube from 'react-youtube';

function video(props, youId){
    const {classes} = props;

    const opts = {
        minHeight: 260,
        minWidth: 640,
        playerVars: {
            autoplay: 0
        }
    };

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

const styles=() => ({
    root:{
        flexGrow: 1,
        direction:'row',
        marginTop: 'auto',
        marginLeft: 'auto',
        alignItems: "stretch",
        justifyContent: "center",
    },

    paper2: {
        alignItems: 'center',
        marginTop: 15,
        marginLeft:10,
        marginRight: 10
    },
});
export default withStyles(styles)(video);