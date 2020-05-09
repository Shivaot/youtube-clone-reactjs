import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const VideoListItem = (props) => {
	return (
		<Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center',cursor: 'pointer'}} onClick={() => props.onVideoSelect(props.video)}>
            <img style={{marginRight: '20px'}} alt='thumbnail' src={props.video.snippet.thumbnails.medium.url} />
            <Typography variant='subtitle1'><b>{props.video.snippet.title}</b></Typography>
            </Paper>
		</Grid>
	);
};

export default VideoListItem;
