import React from 'react';
import VideoListItem from './VideoListItem/VideoListItem';
import { Grid } from '@material-ui/core';


const VideoList = (props) => {
    const videoList = props.videos.map((video,id) => <VideoListItem key={id} video={video} onVideoSelect={props.videoClicked}/>);
    return (
        <Grid container spacing={10}>
            {videoList}
        </Grid>
    );
};

export default VideoList;