import React from 'react';
import { Paper, Typography, LinearProgress } from '@material-ui/core';


const VideoDetail = (props) => {
    if (!props.video) {
        return <LinearProgress />;      
    }
    const videoURL = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: '50%',paddingLeft: '20px'}}>
                <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videoURL} />
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant='h4'>{props.video.snippet.title} - {props.video.snippet.channelTitle}</Typography>
                <Typography variant='subtitle1'>{props.video.snippet.channelTitle}</Typography>
                <Typography variant='subtitle2'>{props.video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    );    
};

export default VideoDetail;