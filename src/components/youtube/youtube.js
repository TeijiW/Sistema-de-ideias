import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import YouTube from 'react-youtube';


const styles = () => ({
    root: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight:10,
    },
});

const opts = {
    height: 265,
    width: "100%",
    playerVars: {
        autoplay: 0
    }
};

function Video(props){
    return (
        <div className={styles.root}>
            <YouTube
                className={styles.paper}
                videoId={props.ytId}
                opts={opts}
            />
        </div>
    );
}

export default withStyles(styles)(Video);